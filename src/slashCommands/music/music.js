const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, VoiceChannel, GuildEmoji } = require('discord.js');
//const client = require('../../structures/Client.js');

module.exports = {
    CMD: new SlashCommandBuilder()
        .setName('music')
        .setDescription("Sistema de musica.")

        .addSubcommand(subcommand =>
            subcommand.setName('play')
                .setDescription("Reproducir una música.")
                .addStringOption(option =>
                    option.setName('musica')
                        .setDescription("Introduce el nombre o la url de una canción.")
                        .setRequired(true)
                )
        )

        .addSubcommand(subcommand =>
            subcommand.setName('volumen')
                .setDescription("Ajusta el volumen de la canción.")
                .addIntegerOption(option =>
                    option.setName('porcentaje')
                        .setDescription("10 = 10%")
                        .setMinValue(1)
                        .setMaxValue(100)
                        .setRequired(true)
                )
        )

        .addSubcommand(subcommand =>
            subcommand.setName('opciones')
                .setDescription("Selecciona una opción.")
                .addStringOption(option =>
                    option.setName('opciones')
                        .setDescription("Selecciona una opción.")
                        .setRequired(true)
                        .addChoices(
                            { name: "queue", value: "queue" },
                            { name: "skip", value: "skip" },
                            { name: "pause", value: "pause" },
                            { name: "resume", value: "resume" },
                            { name: "stop", value: "stop" },
                        )
                )
        ),

    async execute(client, interaction) {
        const { options, member, guild, channel } = interaction;

        const subcommand = options.getSubcommand();

        if (!subcommand) {
            return interaction.reply({ content: "Por favor, especifica un subcomando válido.", ephemeral: true });
        }

        const query = options.getString("musica");
        const volume = options.getInteger("porcentaje");
        const option = options.getString("opciones");
        const voiceChannel = member.voice.channel;

        const embed = new EmbedBuilder();

        if (!voiceChannel) {
            embed.setColor("Red").setDescription("Debes estar en un canal de voz para usar este comando.");
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        if (!member.voice.channelId == guild.members.me.voice.channelId) {
            embed.setColor("Red").setDescription(`No puedes usar el reproductor de música porque ya está activo en <#${guild.members.me.voice.channelId}>`);
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        try {

            switch (subcommand) {
                case "play":
                    client.distube.play(voiceChannel, query, { textChannel: channel, member: member });
                    return interaction.reply({ content: "🎶 Reproduciendo..." });

                case "volume":
                    client.distube.setVolume(voiceChannel, volume);
                    return interaction.reply({ content: `🔉 El volumen se cambio a ${volume}%.` });

                case "settings":
                    const queue = client.distube.getQueue(voiceChannel);

                    if (!queue) {
                        embed.setColor("Red").setDescription("No hay nada reproduciendo.");
                        return interaction.reply({ embeds: [embed], ephemeral: true });
                    }

                    switch (option) {
                        case "skip":
                            await queue.skip(voiceChannel);
                            embed.setColor("Blue").setDescription("⏩ La canción se ha omitido.");
                            break;

                        case "stop":
                            await queue.stop(voiceChannel);
                            embed.setColor("Red").setDescription("⏹️ La canción se ha parado.");
                            break;

                        case "pause":
                            await queue.pause(voiceChannel);
                            embed.setColor("Orange").setDescription("⏸️ La canción se ha pausado.");
                            break;

                        case "resume":
                            await queue.pause(voiceChannel);
                            embed.setColor("Green").setDescription("▶️ La canción se ha reanudado.");
                            break;

                        case "queue":
                            await queue.pause(voiceChannel);
                            embed.setColor("Purple").setDescription(`${queue.songs.map(
                                (song, id) => `\n**${id + 1}.**${song.name} - \`${song.formattedDuration}\``
                            )}`);
                            return interaction.reply({ embeds: [embed], ephemeral: true });
                    }
            }

        } catch (error) {
            console.log(error);

            embed.setColor("Red").setDescription("⛔️ | Algo salió mal...");
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

    }
}