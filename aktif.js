const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require('quick.db');
exports.run= async (client, message, args) => {       

    if(!message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send(new MessageEmbed()

  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setDescription(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`)// burayı değiştirebilirsiniz
  .setColor('2f3136')).then(x => x.delete({timeout: 5000}));


  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())  
  .setColor('2f3136')
  .setDescription(`**Sunucu Aktif, İyi Roller!**`)
  .setImage("https://cdn.discordapp.com/attachments/966633760944709652/986901007978078208/standard.gif")
    .setTimestamp()
  message.channel.send(embed)
}

  exports.conf = {
    aliases: ["aktif"],
    permLevel: 0
};

module.exports.help = {
    name: "aktif",
}


