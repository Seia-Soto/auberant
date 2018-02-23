const Discord = require('discord.js')
const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        var embed = new Discord.RichEmbed()
          .setColor(3447003)
          .setTitle(`${message.author.username}님의 프로필사진`)
          .setImage(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
        message.channel.send({embed})
        break;
      default:
        var embed = new Discord.RichEmbed()
          .setColor(3447003)
          .setTitle(`Avatar of ${message.author.username}`)
          .setImage(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
        message.channel.send({embed})
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['프로필'],
  permLevel: 0
}

exports.help = {
  name: 'avatar',
  description: 'Get avatar of user.',
  usage: 'avatar'
}
