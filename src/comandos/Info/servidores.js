const { EmbedBuilder } = require('discord.js');

module.exports = {
    DESCRIPTION: "Muestra la lista de servidores en el que se encuentra el bot",

    async execute(client, message, args, prefix, GUILD_DATA) {

        const serverslist = client.guilds.cache.map(guild => `> **-** ${guild.name} \`(ID: ${guild.id})\``);
        const embed = new EmbedBuilder()
            .setTitle("lista de servidores")
            .setDescription(`El bot se encuentra en los siguientes servidores:\n${serverslist.join('\n')}`)
            .setColor("Random")

        message.reply({ embeds: [embed] });
    }
}
