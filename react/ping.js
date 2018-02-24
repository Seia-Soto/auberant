const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        message.channel.send({embed: {
          color: parseColor(int.color),
          title: '질의',
          description: '요청 중..'
        }}).then((ping) => {
          ping.edit({embed: {
            color: parseColor(int.color),
            title: '질의',
            description: `요청이 반환되었습니다! ${ping.createdTimestamp - message.createdTimestamp}ms가 소요되었습니다.`
          }})
        })
        .catch(console.error)
        break;
      default:
        message.channel.send({embed: {
          color: parseColor(int.color),
          title: 'ping',
          description: 'Pinging..'
        }}).then((ping) => {
          ping.edit({embed: {
            color: parseColor(int.color),
            title: 'ping',
            description: `Pong! Took ${ping.createdTimestamp - message.createdTimestamp}ms.`
          }})
        })
        .catch(console.error)
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['질의'],
  permLevel: 0
}

exports.help = {
  name: 'ping',
  description: 'Load Auberant API respones time.',
  usage: 'ping'
}
