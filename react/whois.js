const translate = require('google-translate-api')
const whois = require('whois')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        if (!args[0]) {
          message.channel.send({embed: {
            color: 3447003,
            title: '후이즈',
            description: `등록된 도메인 정보를 ICANN WHOIS에서 가져옵니다. 인수는 도메인 이름입니다.`
          }})
        } else {
          whois.lookup(args[0], (error, result) => {
            if (result === undefined) {
              message.channel.send({embed: {
                color: 3447003,
                title: '후이즈',
                description: `도메인 정보를 가져올 수 없습니다.`
              }})
              return
            }
            var result = result.substring(0, 2047)
            message.channel.send({embed: {
              color: 3447003,
              title: '후이즈',
              description: `${result}`
            }})
          })
        }
        break;
      default:
        if (!args[0]) {
          message.channel.send({embed: {
            color: 3447003,
            title: 'whois',
            description: `Query domain registeration information from ICANN WHOIS. Argument is domain name.`
          }})
        } else {
          whois.lookup(args[0], (error, result) => {
            if (result === undefined) {
              message.channel.send({embed: {
                color: 3447003,
                title: 'whois',
                description: `Can't read properties of result.`
              }})
              return
            }
            var result = result.substring(0, 2047)
            message.channel.send({embed: {
              color: 3447003,
              title: 'whois',
              description: `${result}`
            }})
          })
        }
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['후이즈'],
  permLevel: 0
}

exports.help = {
  name: 'whois',
  description: 'Query domain registeration information from ICANN WHOIS.',
  usage: 'whois'
}
