const translate = require('google-translate-api')
const whois = require('whois')
const int = require('../int.json')
const react = message.content.split(' ')[0].slice(int.prefix.length)
exports.run = (client, message, args) => {
  translate(react, {to: en}).then(res => {
    switch (res.from.language.iso) {
      case 'en':
        if (!args[0]) {
          message.channel.send({embed: {
            color: 3447003,
            title: 'whois',
            description: `Query domain registeration information from ICANN WHOIS. Argument is domain name.`
          }})
        } else {
          whois.lookup(args[0], (error, result) => {
            console.log(result)
            result = substring(0, 2047)
            message.channel.send({embed: {
              color: 3447003,
              title: 'whois',
              description: `${result}`
            }})
          })
        }
        break;
      case 'ko':
        if (!args[0]) {
          message.channel.send({embed: {
            color: 3447003,
            title: 'whois',
            description: `등록된 도메인 정보를 ICANN WHOIS에서 가져옵니다. 인수는 도메인 이름입니다.`
          }})
        } else {
          whois.lookup(args[0], (error, result) => {
            console.log(result)
            result = substring(0, 2047)
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
