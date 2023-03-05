const { EmbedBuilder } = require('discord.js');

module.exports = {
    DESCRIPTION: "Te enviaré una imagen de megumin al azar.",
    ALIASES: ["waifu"],

    execute: async (client, message, args, GUILD_DATA, prefix) => {

    // Enviar una solicitud HTTP para obtener una imagen SFW de megumin
    const response = await fetch(`https://api.waifu.pics/sfw/megumin`);
    const data = await response.json();

    // Comprobar si se encontró una imagen
    if (data.url) {
      // Crear un mensaje con la imagen
        const Embed = new EmbedBuilder()
        .setImage(data.url)
        .setColor(process.env.COLOR)
        .setTimestamp();

        message.reply({ embeds: [Embed] })

    } else {
      // Si no se encontró una imagen, enviar un mensaje de error
      message.reply(`No se encontró una imagen para la categoría megunmin.`);
    }
  }
}