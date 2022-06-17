const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  
  let kayıtkanal = ayarlar.kayıtkanal
  var kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  
   if(![ayarlar.yetkilirol].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send(new MessageEmbed()

  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setDescription(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`)// burayı değiştirebilirsiniz
  .setColor('2f3136')).then(x => x.delete({timeout: 5000}));
  
  if(message.channel.id !== kayıtkanal) return message.channel.send(`** Bu komudu sadece <#${kayıtkanal}> adlı kanalda kullanabilirsin!**`)
  let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Bir Kullanıcı Belirtmelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz
let isim = args[1]
if (!isim) return message.channel.send(`**Steam profil belirtmelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz
let yaş = args[2]
if (!yaş) return message.channel.send(`**Steam hexini belirtmelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz
    if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Belirtilen Kişinin Rolü Senle Eşit Ve ya Üstün Bü yüzden Kayıt Edemezsin!').then(x => x.delete({timeout: 5000}));

member.setNickname(`IC İSİM / OOC İSİM`)
  
  member.roles.remove(ayarlar.kayıtsızrol);
  member.roles.add(ayarlar.erkekrol)
  
  
  
  const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('2f3136')
.setDescription(`${member} Kullanıcının ismi \`IC İSİM / OOC İSİM\` olarak değiştirildi ve <@&${ayarlar.erkekrol}> rolü verildi! \n\n Yetkilinin Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.setThumbnail(message.author.avatarURL())
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setImage("https://cdn.discordapp.com/attachments/966633760944709652/986901007978078208/standard.gif")
  .setTimestamp()
message.channel.send(embed)
  db.add(`kayıtsayı_${message.author.id}`, 1)
  
  
  client.channels.cache.get(ayarlar.chat).send(`${member} ${yaş} `)// burayı değiştirebilirsiniz
  
}

exports.conf = {
    aliases: ["kaydet"],
    permLevel: 0
};

module.exports.help = {
    name: "erkek",
}


