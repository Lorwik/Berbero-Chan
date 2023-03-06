module.exports = {
    name: "stop",
    aliases: ["desconectar", "leavevc", "leave", "disconnect"],
    desc: "Sirve para desconectar al bot de la sala de voz",
    execute: async (client, message, args, prefix) => {
        try {
            //comprobaciones previas
            const queue = client.distube.getQueue(message);

            if (!queue) return message.reply(`❌ **No hay ninguna canción reproduciéndose!**`);

            if (!message.member.voice?.channel) return message.reply(`❌ **Tienes que estar en un canal de voz para ejecutar este comando!**`);

            if (message.guild.members.me.voice?.channel && message.member.voice?.channel.id != message.guild.members.me.voice?.channel.id) return message.reply(`❌ **Tienes que estar en el mismo canal de voz __QUE YO__ para ejecutar este comando!**`);

            client.distube.stop(message);
            message.reply(`🏃‍♂️ **Desconectado!**`)
        } catch (error) {
            console.error("Error: " + error);
        }
    }
}