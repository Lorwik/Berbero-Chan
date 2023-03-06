const { EmbedBuilder } = require('discord.js');

module.exports = {
    DESCRIPTION: "Consulta el tiempo en una ciudad",
    ALIASES: ["tiempo"],

    execute: async (client, message, args, GUILD_DATA, prefix) => {

        const apiKey = '0d9826f507cb7bc898e669d671170b5b';
        const ciudad = args.join(' ');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === '404') {
                message.channel.send('No se ha encontrado la ciudad');
                return;
            }

            const embed = new EmbedBuilder()
                .setTitle(`Tiempo en ${ciudad}`)
                .addField('Temperatura', `${data.main.temp}°C`, true)
                .addField('Sensación térmica', `${data.main.feels_like}°C`, true)
                .addField('Humedad', `${data.main.humidity}%`, true)
                .addField('Clima', `${data.weather[0].description}`, true)
                .setThumbnail(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)

            if (data.sys && data.sys.country) { // Verificar que la propiedad 'country' existe en data.sys
                embed.addField('País', `${data.sys.country}`, true)
            }

            message.reply({ embeds: [embed] })
        } catch (error) {
            console.error(error);
            message.channel.send('Ha habido un error al consultar el tiempo');
        }
    }
}