const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bunu kullanma yetkin yok`)
  message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
  })

message.channel.send(`**Sohbet <@&${ayarlar.erkekrol}> rolüne açıldı!**`)
}

exports.conf = {
  aliases: ["wlac"],
  permLevel: 0
};

module.exports.help = {
  name: "wlac",
}
