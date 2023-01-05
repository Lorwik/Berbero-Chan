const { EmbedBuilder } = require('discord.js');
module.exports = {
    DESCRIPTION: "Golpea alguien.",
    ALIASES: ["hit", "pegar", "golpear"],
    async execute(client, message, args, prefix) {

        const usuario = message.mentions.members.first() || message.member

        const array =
            ["https://media.tenor.com/XhdHGRof6WEAAAAC/anime-ataque-golpe-en-la-pared.gif",
                "https://media.tenor.com/Ka8eQ8D7yVwAAAAC/anime-super-punch.gif",
                "https://media.tenor.com/2co4feAipsYAAAAd/hasbulla-hasbik.gif",
                "https://media.tenor.com/pFhICDyywrYAAAAC/kick-fight.gif",]

        const user = await message.mentions.users.first()
        if (!user) return message.reply({

            embeds: [
                new EmbedBuilder()
                    .setTitle(':x: No mencionaste a nadie!')
                    .addFields([{ name: 'Usuario', value: 'Creo que podrias **mencionar a alguien.. :thinking:  **' }])
            ]
        });

        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`${message.author.username} **ha golpeado a** ${user.tag} 👊🏻`)
                    .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
            ]
        })

    }
}