const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Indica quien es el puto amo",
    execute: async (client, message, args, GUILD_DATA, prefix) => {

        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`¿Quien es el puto amo?`)
                    .setDescription(`¿Tu eres subnormal o que chiquillo? Esta clarisimo que el putisimo amo es mi creado Lorwik-sama. PUTO SUBNORMAL!`)
            ]
        })
    }
}