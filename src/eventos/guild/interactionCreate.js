module.exports = async (client, interaction) => {
    if(!interaction.guild || interaction.channel) return;

    const COMANDO = client.slashCommands.get(interaction?.commandName);

    if(COMANDO){
        if(COMANDO.OWNER) {
            const DUENOS = process.env.OWNER_IDS.split(" ");
            if(!DUENOS.includes(interaction.user.id)) return interaction.reply({content: `❌ **Solo los dueños de este bot pueden ejecutar este comando **\nDueños del bot: ${DUENOS.map(DUENO => `<@${DUENO}>`).join(", ")}`})
        }

        if(COMANDO.BOT_PERMISSIONS) {
            if(!interaction.guild.members.me.permissions.has(COMANDO.BOT_PERMISION)) return interaction.reply({content: `❌ **Necesito los siguientes permisos para ejecutar este comando **\n${COMANDO.BOT_PERMISIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }
        
        if(COMANDO.PERMISSIONS) {
            if(!interaction.members.permissions.has(COMANDO.PERMISION)) return interaction.reply({content: `❌ **Necesitas los siguientes permisos para ejecutar este comando **\n${COMANDO.BOT_PERMISIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        try {
            COMANDO.execute(client, interaction, "/");
        } catch (e) {
            interaction.reply({content: ' **Ha ocurrido un error al ejecutar el comando.**\n'});
            console.log(e);
            return;
        }
    }
}