const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Consigues la foto de un perrito!",
    ALIASES: ["dog"],

    execute: async (client, message, args, GUILD_DATA, prefix) => {

        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const img = (await res.json()).message;

        await message.reply({
            content: img
        })
    }
}