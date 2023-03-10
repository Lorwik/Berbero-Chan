const { EmbedBuilder } = require('discord.js');
const axios = require('axios').create({
    timeout: 5000 // Timeout de 5 segundos
  });

module.exports = {
    DESCRIPTION: "Te enviaré una imagen de megumin al azar.",
    ALIASES: ["waifu"],

    execute: async (client, message, args, GUILD_DATA, prefix) => {

        try {

            // Hacemos una petición a una API de noticias de videojuegos
            const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: 'es',
                    language: 'es',
                    category: 'gaming',
                    apiKey: process.env.NEWS_API_KEY
                }
            });

            // Creamos un MessageEmbed para mostrar las noticias
            const embed = new EmbedBuilder()
                .setTitle('Noticias de Videojuegos')
                .setColor('#0099ff')
                .setDescription('Aquí están las últimas noticias de videojuegos');

            // Agregamos las noticias al MessageEmbed
            data.articles.forEach((article, index) => {
                if (index < 5) { // Mostramos solamente las 5 primeras noticias
                    embed.addFields(article.title, article.url);
                }
            });

            // Enviamos el MessageEmbed al canal donde se hizo el comando
            message.reply({ embeds: [embed] });

        } catch (error) {
            console.log(error);
        }
    }
}