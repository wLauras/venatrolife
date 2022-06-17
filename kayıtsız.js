const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  
  
      if(![ayarlar.yetkilirol].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send(new MessageEmbed()

  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setDescription(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`)// burayı değiştirebilirsiniz
  .setColor('2f3136')).then(x => x.delete({timeout: 5000}));
  
  var tag = ayarlar.tag

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(` **Bir kişi etiketlemelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz


member.roles.add(ayarlar.kayıtsızrol);
member.roles.remove(ayarlar.erkekrol)
member.setNickname("KAYITSIZ")

const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('2f3136')
.setDescription(`${member} Kullanıcının ismi \`Kayıtsız\` olarak değiştirildi ve <@&${ayarlar.kayıtsızrol}> rolü verildi!`)
.setThumbnail(message.author.avatarURL())
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setImage("https://cdn.discordapp.com/attachments/966633760944709652/986901007978078208/standard.gif")
  .setTimestamp()
message.channel.send(embed)



}
exports.conf = {
    aliases: ["unregister"],
    permLevel: 0
};

module.exports.help = {
    name: "kayıtsız",
}
