const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Muestra la lista de comandos del bot",
    ALIASES: ["ayuda"],
    execute: async (client, message, args, GUILD_DATA, prefix) => {

        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`Lista de comandos`)
                    .setDescription(`Todavia no se como mostrarte todos los comandos disponibles, espera a que el Lorwik aprenda hacerlo 😉`)
            ]
        })
    }
}