const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Piedra, Papel o Tijeras",
    ALIASES: ["piedrapapeltijeras"],
    execute: async (client, message, args, GUILD_DATA, prefix) => {

        let nRes = Math.floor(Math.random() * 3);

        switch (nRes) {

            case 0:
                resultado = "Piedra";
                break;

            case 1:
                resultado = "Papel";
                break;

            case 2:
                resultado = "Tijeras";
                break;

            default:
                resultado = "Piedra"
                break;

        }

        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`Resultado`)
                    //.setThumbnail('https://emojipedia-us.s3.amazonaws.com/source/skype/289/pool-8-ball_1f3b1.png')
                    .setDescription(`${resultado}`)
            ]
        })
    }
}