const { EmbedBuilder } = require('discord.js');
module.exports = {
    DESCRIPTION: "Muestra un meme aleatorio",
    async execute(client, message, args, prefix) {

        const url = 'https://api.imgflip.com/get_memes';

        try {
            const response = await fetch(url);
            const json = await response.json();

            const randomIndex = Math.floor(Math.random() * json.data.memes.length);
            const meme = json.data.memes[randomIndex];

            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle(meme.name)
                .setImage(meme.url);

                message.reply({ embeds: [embed] })

        } catch (err) {
            console.error(err);
            message.channel.send('Error al obtener un meme.');
        }

    }
}