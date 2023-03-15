const { EmbedBuilder } = require('discord.js');

module.exports = {
    DESCRIPTION: "Reglas del servidor",
    ALIASES: ["rules", "reglas"],

    async execute(client, message, args, prefix, GUILD_DATA) {

        const serverslist = client.guilds.cache.map(guild => `> **-** ${guild.name} \`(ID: ${guild.id})\``);
        const embed = new EmbedBuilder()
            .setTitle("Reglas del servidor")
            .setDescription(`
            - **Respeto mutuo:** Todos los miembros del servidor deben ser respetuosos entre sí. No se tolerará ningún tipo de discriminación o acoso basado en la raza, género, orientación sexual, religión, origen étnico, discapacidad o cualquier otra característica personal. \n
            - **Lenguaje apropiado:** Los miembros deben usar un lenguaje apropiado en el servidor. No se permiten palabras vulgares, groseras, obscenas, ni ningún tipo de lenguaje ofensivo. \n
            - **Temas apropiados:** Los miembros deben mantener las conversaciones en el servidor relacionadas con el tema del servidor o de los canales específicos. Los temas fuera de lugar pueden ser eliminados o movidos a canales apropiados. \n
            - **Uso apropiado de los canales:** Los miembros deben utilizar los canales apropiados para el tema de conversación que quieren tratar. Por ejemplo, un canal de música se debería utilizar para conversaciones relacionadas con la música. \n
            - **Moderación adecuada:** Los moderadores del servidor se encargan de garantizar que se cumplan las reglas del servidor. Si un miembro viola las reglas, los moderadores pueden tomar medidas como advertencias, silenciamientos o expulsiones. \n
            - **Respetar las normas de privacidad:** Los miembros deben respetar la privacidad de los demás. No se permiten compartir información personal de otros miembros sin su consentimiento. \n
            - **No compartas material inapropiado:** No se permite compartir material inapropiado, ofensivo, ilegal o peligroso en el servidor. \n
            - **Mantener la limpieza del servidor:** Los miembros deben mantener el servidor limpio y ordenado. No se permiten mensajes con imágenes o texto muy grandes, ni tampoco el abuso de emojis o de formato. \n
            - **Seguridad en la cuenta:** Cada miembro es responsable de la seguridad de su cuenta. No se permite compartir contraseñas ni información personal de la cuenta. \n
            `)
            .setColor("Random")

        message.reply({ embeds: [embed] });
    }
}
