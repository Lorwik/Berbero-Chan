const mongoose = require('mongoose');

module.exports = client => {
    let palito = 53;

    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║       Conectado a la base de datos de MONGODB!      ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.blue)
    }).catch((err) => {
        console.log(`☁ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB`.red);
        console.log(err)
    })

    console.log(`╔═════════════════════════════════════════════════════╗`.green)
    console.log(`║ `.green + " ".repeat(-1 + palito - 1) + " ║".green)
    console.log(`║ `.green + `      Conectado como ${client.user.tag}`.green + " ".repeat(-1 + palito - 1 - `      Conectado como ${client.user.tag}`.length) + " ║".green)
    console.log(`║ `.green + " ".repeat(-1 + palito - 1) + " ║".green)
    console.log(`╚═════════════════════════════════════════════════════╝`.green)

    if (client?.application?.commands) {
        client.application.commands.set(client.slashArray);
        console.log(`(/) ${client.slashCommands.size} Comandos Publicados!`.green)
    }
}