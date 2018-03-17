const Discord = require('discord.js')
const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        var messageTitle = '다음 사용자의 프로필사진: '
        break;
      default:
        var messageTitle = 'Avatar of '
        break;
    }
    var message = new Discord.RichEmbed()
      .setColor(4620980)
      .setTitle(`${messageTitle}${message.author.username}`)
      .setImage(`${message.author.avatarURL}`)
      .setURL(`${message.author.avatarURL}`)
    message.channel.send({message})
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['프로필사진'],
  permLevel: 0
}

exports.help = {
  name: 'avatar',
  description: 'Get avatar of user.',
  usage: 'avatar'
}
