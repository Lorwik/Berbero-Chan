module.exports = {
    DESCRIPTION: "Recarga los archivos del bot.",
    OWNER: true,
    ALIASES: ["limpiar", "clear", "borrar"],

    async execute(client, message, args, prefix) {
        let opcion = "Comandos, Eventos y Handlers";

        // Obtenemos el numero de mensajes a eliminar.
        let count = parseInt(message.content.split(' ')[1]);

        // Validamos el numero de mensajes
        if (!count || count < 1 || count > 100) return message.reply('Por favor, proporcione un número entre 1 y 100 para eliminar');

        // Eliminar los mensajes
        message.channel.bulkDelete(count)
            .then(messages => message.channel.send(`Se eliminaron \`${messages.size}/${count}\` mensajes.`))
            .catch(error => message.channel.send(`Error: ${error}`));
    }

}