const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        message.channel.send({embed: {
              color: 4620980,
              title: '업타임',
              description: `${process.uptime} 초`
            }})
        break;
      default:
        message.channel.send({embed: {
              color: 4620980,
              title: 'uptime',
              description: `${process.uptime} second`
            }})
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['업타임'],
  permLevel: 0
}

exports.help = {
  name: 'uptime',
  description: 'Get uptime of Auberant.',
  usage: 'uptime'
}
