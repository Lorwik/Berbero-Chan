const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "bola8",
    ALIASES: ["boladelasuerte"],
    execute: async(client, message, args, GUILD_DATA, prefix) => {
        let texto = args.join(" ");
        const array = [
        "Es cierto",
        "Definitivamente",
        "Lo mas probable",
        "No tengo una respuesta para eso..",
        "No podria confirmartelo",    
        "No cuentes con ello",
        "Es muy dudoso",
        "Creeria que si",
        "Diria que no",
        "Los astros aun no se alinean",
    ]

    if(!texto) return message.channel.send({
        embeds: [
            new EmbedBuilder()
            .setTitle(':closed_book: Debes introducir un texto para responderte a algo')
            .setThumbnail('https://emojipedia-us.s3.amazonaws.com/source/skype/289/pool-8-ball_1f3b1.png')
            .setDescription('Mi preddicion ha fallado! :x:')
        ]
    })
    await message.reply({
        embeds: [
            new EmbedBuilder()
            .setTitle(`${message.author.username} pregunto: **${texto}**`)
            .setThumbnail('https://emojipedia-us.s3.amazonaws.com/source/skype/289/pool-8-ball_1f3b1.png')
            .setDescription(`**Mi respuesta es:** ${array[(Math.floor(Math.random() * array.length))]}`)
        ]
    })
  }
}