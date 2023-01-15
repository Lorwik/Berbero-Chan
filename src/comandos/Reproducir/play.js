const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Reproducir música",
    ALIASES: ["reproducir"],

    execute: async (client, message, args, GUILD_DATA, prefix) => {

        // Obtenemos el canal de voz del usuario que lo llamo
        let canalvoz = message.member.voice.channel;

        // ¿El usuario esta en un canal de voz?
        if(!canalvoz) {
            return message.channel.send('❌¡Necesitas unirte a un canal de voz primero!.');

        } else if (message.guild.voiceConnection) {
            return message.channel.send('❌Ya estoy conectado en un canal de voz.');

        } else {
            message.channel.send('📡Conectando...').then(m => {
                client.distube.voices.join(canalvoz).then(() => {
                    m.edit('✅Conectado exitosamente.').catch(error => console.log(error));
        
                }).catch(error => console.log(error));
        
            }).catch(error => console.log(error));
        
        };
    }

}