const figlet = require('figlet')
const Discord = require('discord.js')
const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  var messageToASCii = args.slice(0).join(' ')
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        var messageTitle = '아스키'
        var messageDescription = 'ASCii 문자열을 전송합니다. 인수는 영문 문자열입니다.'
        var errorTitle = '오류'
        break;
      default:
        var messageTitle = 'ascii'
        var messageDescription = 'Send ASCii artworks. Argument is string.'
        var errorTitle = 'Error'
        break;
    }
    if (!args[0]) {
      var message = new Discord.RichEmbed()
        .setColor(4620980)
        .setTitle(`${messageTitle}`)
        .setDescription(`${messageDescription}`)
      message.channel.send({message})
      return
    }
    figlet.text(`${messageToASCii}`, (error, data) => {
      if (error) {
        console.error(error)
        var message = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${messageTitle}`)
          .setDescription(`${messageDescription}`)
        message.channel.send({message})
        return
      }
      message.channel.send('```' + data + '```')
    })
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['아스키'],
  permLevel: 0
}

exports.help = {
  name: 'ascii',
  description: 'Print text to ascii artwork',
  usage: 'ascii <word>'
}
