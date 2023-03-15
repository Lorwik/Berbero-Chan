const { EmbedBuilder } = require('discord.js');
module.exports = {
    DESCRIPTION: "Muestra el ID del usuario mencionado.",
    ALIASES: ["id"],
    OWNER: true,
    
    async execute(client, message, args, prefix) {

        const usuario = message.mentions.members.first() || message.member

        const user = await message.mentions.users.first()
        if (!user) return message.reply({

            embeds: [
                new EmbedBuilder()
                    .setTitle(':x: No mencionaste a nadie!')
                    .addFields([{ name: 'Usuario', value: 'Debes mencionar a alguien.  **' }])
            ]
        });

        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`El id de ${user.tag} es: ${user.id}`)
            ]
        })

    }
}