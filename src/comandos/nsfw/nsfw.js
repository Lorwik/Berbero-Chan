const CLUB = require("club-atticus");//requerimos la npm que nos dara los links
const club = new CLUB();
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Contenido NSFW 🔞",
    ALIASES: ["nsfw"],

    async execute(client, message, args, prefix) {

        const embed = new EmbedBuilder()
        .setAuthor({name: `🔞 NSFW`, iconURL: "https://cdn.discordapp.com/attachments/1044696367433527311/1064738776057905152/d20d172af361678d811812f14154b004.png"})
        .setColor("e60ad4")
        .setImage(await club.pgif())

        message.reply({ embeds: [embed] })
    }
}