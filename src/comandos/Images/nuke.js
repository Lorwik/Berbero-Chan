const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Hace explotar una bomba nuclear en el servidor!",
    ALIASES: ["nuclear"],
    COOLDOWN: 3,

    execute: async(client, message, args, GUILD_DATA, prefix) => {
        await message.reply({
            content: `https://media.tenor.com/giN2CZ60D70AAAAC/explosion-mushroom-cloud.gif`
        })
    }
}