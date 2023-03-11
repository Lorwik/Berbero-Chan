const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    CMD: new SlashCommandBuilder()
        .setDescription("Juega al buscaminas personalizado")
        .addStringOption(option => option.setName('columnas')
            .setDescription('Cantidad de columnas (menor que 10)')
            .setRequired(true))
        .addStringOption(option => option.setName('filas')
            .setDescription('Cantidad de filas (menor que 10)')
            .setRequired(true))
        .addStringOption(option => option.setName('minas')
            .setDescription('Cantidad de minas en el tablero')
            .setRequired(true)),
            
    execute(client, interaction, prefix, GUILD_DATA) {
        function generarTablero(columnas, filas, minas) {
            let tablero = [];

            for (let i = 0; i < columnas; i++) {
                let columna = [];
                for (let j = 0; j < filas; j++) {
                    columna.push(0);
                };
                tablero.push(columna);
            };

            for (let i = 0; i < minas;) {
                let columna = Math.floor(Math.random() * columnas);
                let fila = Math.floor(Math.random() * filas);
                if (tablero[columna][fila] != "M") {
                    tablero[columna][fila] = "M";
                    i++;
                };
            };

            for (let columna = 0; columna < columnas; columna++) {
                for (let fila = 0; fila < filas; fila++) {
                    if (tablero[columna][fila] !== "M") {
                        let count = 0;
                        for (let i = -1; i <= 1; i++) {
                            for (let j = -1; j <= 1; j++) {
                                if (columna + i >= 0 && columna + i < columnas && fila + j >= 0 && fila + j < filas && tablero[columna + i][fila + j] === "M") {
                                    count++;
                                };
                            };
                        };
                        tablero[columna][fila] = count;
                    };
                };
            };

            for (let columna = 0; columna < columnas; columna++) {
                for (let fila = 0; fila < filas; fila++) {
                    switch (tablero[columna][fila]) {
                        case 0: {
                            tablero[columna][fila] = "||:zero:||"
                        } break;
                        case 1: {
                            tablero[columna][fila] = "||:one:||"
                        } break;
                        case 2: {
                            tablero[columna][fila] = "||:two:||"
                        } break;
                        case 3: {
                            tablero[columna][fila] = "||:three:||"
                        } break;
                        case 4: {
                            tablero[columna][fila] = "||:four:||"
                        } break;
                        case 5: {
                            tablero[columna][fila] = "||:five:||"
                        } break;
                        case 6: {
                            tablero[columna][fila] = "||:six:||"
                        } break;
                        case 7: {
                            tablero[columna][fila] = "||:seven:||"
                        } break;
                        case 8: {
                            tablero[columna][fila] = "||:eight:||"
                        } break;
                        case "M": {
                            tablero[columna][fila] = "||:bomb:||"
                        } break;
                    }
                }
            };

            for (let columna = 0; columna < columnas; columna++) {
                tablero[columna] = tablero[columna].join(" ");
            };
            tablero = tablero.join("\n");

            return tablero;
        };

        var columnas = interaction.options.getString('columnas');
        if (columnas > 9) columnas = 9;
        var filas = interaction.options.getString('filas');
        if (filas > 9) filas = 9;
        var minas = interaction.options.getString('minas');
        if (minas > filas * columnas) minas = filas * columnas;

        let tablero = generarTablero(columnas, filas, minas);

        const embedTablero = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`:bomb: Buscaminas de ${columnas}x${filas}`)
            .setDescription(tablero);
        return interaction.reply({ embeds: [embedTablero] })
    }
}