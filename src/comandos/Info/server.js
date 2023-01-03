const { EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
  DESCRIPTION: "Muestra información sobre el servidor en el que se ejecuta el bot.",
  ALIASES: ["sv"],
  BOT_PERMISSIONS: ['ViewChannel'],
  // OWNER: false,
  async execute(client, message, args, prefix, GUILD_DATA) {
    if (message.guild) {
      let owner = await message.guild.members.fetch(message.guild.ownerId);
      const serverInfoEmbed = new EmbedBuilder()
        .setColor('White')
        .setTitle('**Información del servidor**')
        .addFields(
          { name: '**Nombre del servidor**', value: `${message.guild.name}` },
          { name: '**ID del servidor**', value: `${message.guild.id}` },
          { name: '**Miembros totales**', value: `${message.guild.memberCount}` },
          { name: '**Dueño**', value: `${owner.user.tag}` },
          { name: '**Fecha de creación**', value: `${moment(message.guild.createdTimestamp).locale('es').format('LT')} | ${moment(message.guild.createdTimestamp).locale('es').format('LL')} (${moment(message.guild.createdTimestamp).locale('es').fromNow()})` },
          { name: '**Roles**', value: `${message.guild.roles.cache.size}` },
          { name: '**Canales**', value: `${message.guild.channels.cache.size}` },
          { name: '**Emojis**', value: `${message.guild.emojis.cache.size}` },
          { name: '**Mejoras**', value: `${message.guild.premiumSubscriptionCount || '0'}` }
        )
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.reply({ embeds: [serverInfoEmbed] });
    }
  }
}
