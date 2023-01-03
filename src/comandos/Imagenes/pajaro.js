const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Consigues la foto de un pajarito!",
    ALIASES: ["bird"],

    execute: async (client, message, args, GUILD_DATA, prefix) => {

        const res = await fetch("http://shibe.online/api/birds");
        const img = (await res.json())[0];

        await message.reply({
            content: img
        })
    }
}