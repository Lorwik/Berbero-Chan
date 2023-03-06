const { EmbedBuilder } = require('discord.js');

module.exports = {
    DESCRIPTION: "Envia una imagen NSFW aleatoria de una neko 🔞",
    ALIASES: ["neko"],

    execute: async (client, message, args, GUILD_DATA, prefix) => {

    // Enviar una solicitud HTTP para obtener una imagen NSFW de neko
    const response = await fetch(`https://api.waifu.pics/nsfw/neko`);
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
      message.reply(`No se encontró una imagen para la categoría neko.`);
    }
  }
}