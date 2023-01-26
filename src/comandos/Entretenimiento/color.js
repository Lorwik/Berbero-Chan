//Requerimos librerias y modulos:
const Discord = require("discord.js");
const Canvas = require("canvas");
const Color = require("color");

//Realizamos un module exports
module.exports = {
    name: "color",
    category: "informacion",
    aliases: ["color"],
    owner: false,
    usar: "color <#ff381d>",
    desc: "Sirve para generar información de un color hexadecimal que indiques!",
    run: async (client, message, args, prefix) => {
        console.log("prueba");
        //Intentamos:
        try {
            //Definimos color
            let color = args.join(" ")
            //Si no hay args:
            if (!color) return message.reply({
                embeds: [new Discord.EmbedBuilder()
                    .setDescription("**Debes decirme el color hexadecimal para generar la información!**")
                    .setColor("Yellow")
                ]
            })
            //Si nuestro args no empieza por #
            if (!color.startsWith("#")) {
                return message.reply({
                    embeds: [new Discord.EmbedBuilder()
                        .setDescription("**Sorry, ese codigo hexadecimal no es valido...**")
                        .setColor("Yellow")
                    ]
                })
            }
            //Agregamos nuestra opcion a Color:
            let opcion = Color(color);
            //Creamos nuestro lienzo en CANVAS
            let canvas = Canvas.createCanvas(1024, 1024)
            let ctx = canvas.getContext('2d')
            //Agregamos un rectangulo del color (args) y tamaño de (canvas)
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            //Definimos nuestro attachment:
            let attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), { name: 'color.png' });
            //Definimos nuestro embed con todos los datos incrustados:
            let embed = new Discord.EmbedBuilder()
                .setTitle(`Información del color de entrada`)
                .addFields([
                    { name: `ENTRADA`, value: `\`\`\`${color}\`\`\``, inline: true },
                    { name: `RGB`, value: `\`\`\`${opcion.rgb()}\`\`\``, inline: true },
                    { name: `HEX`, value: `\`\`\`${opcion.hex()}\`\`\``, inline: true },
                    { name: `TONO DE COLOR`, value: `\`\`\`${opcion.isLight() == true ? "BRILLANTE O CLARO" : "OSCURO O PALIDO"}\`\`\``, inline: false },
                    { name: `NEGATIVO`, value: `\`\`\`${opcion.negate()}\`\`\``, inline: true },
                    { name: `HSL`, value: `\`\`\`${opcion.hsl().string(Number)}\`\`\``, inline: true },
                ])
                .setThumbnail('attachment://color.png')
                .setColor(color)

            //Retornamos el mensaje con la información:
            return message.reply({ embeds: [embed], files: [attachment] });
        } catch (e) {
            //En caso de no conseguir el color o no poder realizar la solicitud:
            console.log(e)
            message.reply({
                embeds: [new Discord.EmbedBuilder()
                    .setDescription(`**Lo siento, hubo un error al ejecutar esa funcion, vuelve a intentar más tarde...**\n\n**Error registrado:**\n\`\`\`${e}\`\`\``)
                    .setColor("Red")
                ]
            })
        }
    }
}