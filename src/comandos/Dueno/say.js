module.exports = {
    DESCRIPTION: "Hace que el bot diga algo.",
    OWNER: true,

    async execute(client, message, args, prefix){
        let texto = args[0];

        //Si no puso texto...
        if(!texto) return message.reply({ content: "**Tienes que decir algo!**" })

        message.reply({ content: texto });
    }
}