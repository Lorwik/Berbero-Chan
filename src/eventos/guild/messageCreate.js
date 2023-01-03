module.exports = async (client, message) => {

    if(!message.guild || !message.channel || message.author.bot) return;

    if(!message.content.startsWith(process.env.PREFIX)) return;

    const ARGS = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const CMD = ARGS?.shift()?.toLowerCase();

    const COMANDO = client.commands.get(CMD) || client.commands.find(c => c.ALIASES && c.ALIASES.includes(CMD));

    if(COMANDO){
        if(COMANDO.OWNER) {
            const DUENOS = process.env.OWNER_IDS.split(" ");
            if(!DUENOS.includes(message.author.id)) return message.reply({content: `❌ **Solo los dueños de este bot pueden ejecutar este comando **\nDueños del bot: ${DUENOS.map(DUENO => `<@${DUENO}>`).join(", ")}`})
        }

        if(COMANDO.BOT_PERMISSIONS) {
            if(!message.guild.members.me.permissions.has(COMANDO.BOT_PERMISION)) return message.reply({content: `❌ **Necesito los siguientes permisos para ejecutar este comando **\n${COMANDO.BOT_PERMISIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }
        
        if(COMANDO.PERMISSIONS) {
            if(!message.members.permissions.has(COMANDO.PERMISION)) return message.reply({content: `❌ **Necesitas los siguientes permisos para ejecutar este comando **\n${COMANDO.BOT_PERMISIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        try {
            COMANDO.execute(client, message, ARGS, process.env.PREFIX);
        } catch (e) {
            message.reply({content: ' **Ha ocurrido un error al ejecutar el comando.**\n'});
            console.log(e);
            return;
        }
    }
}