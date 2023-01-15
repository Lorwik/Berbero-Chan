const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    DESCRIPTION: "Tira un dado de 6",
    ALIASES: ["dado"],
    execute: async (client, message, args, GUILD_DATA, prefix) => {

        const dados = ['1', '2', '3', '4', '5', '6']

        const dadosFinal = dados[Math.floor(Math.random() * dados.length)]

        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Dado')
                    .addFields([{ name: "🎲 El Numeró Que Salió Fue:", value: `\`\`\`${dadosFinal}\`\`\`` }])
                    .setColor("#FFF195")
            ]
        })

    }
}