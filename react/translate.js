const translate = require('google-translate-api')
const braille = require('braille')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        var translateFor = args.slice(1).join(" ")
        if (!translateFor) {
          message.channel.send({embed: {
            color: 4620980,
            title: '번역',
            description: '주어진 단어 또는 문장을 번역합니다. 첫번째 인수는 언어코드이며 두번째 인수는 문자열입니다. [국가별 언어코드 표를 찾고 계신가요](http://help.bingads.microsoft.com/apex/index/18/ko/10004)?'
          }})
        } else {
          if (args[0] === 'braille' || args[0] === '점자') {
            var messageToBraille = args.slice(1).join(" ")
            var messageToBrailleResult = braille.toBraille(`${messageToBraille}`)
            message.channel.send({embed: {
              color: 4620980,
              title: 'translate',
              description: `**__영어__에서 __점자__로:** ${messageToBrailleResult}`
            }})
            return
          } else if (args[0] === 'text' || args[0] === '텍스트') {
            var brailleToText = args.slice(1).join(" ")
            var brailleToTextResult = braille.toText(`${brailleToText}`)
            message.channel.send({embed: {
              color: 4620980,
              title: '번역',
              description: `**__점자__에서 __영어__로:** ${brailleToTextResult}`
            }})
          }
          translate(`${translateFor}`, {to: `${args[0]}`}).then(res => {
            message.channel.send({embed: {
              color: 4620980,
              title: '번역',
              description: `**__${res.from.language.iso}__에서 __${args[0]}__로:** ${res.text}`
            }})
            return
          }).catch(error => {
            message.channel.send({embed: {
              color: 4620980,
              title: '오류',
              description: `${error}`
            }})
          })
        }
        return
        break;
      default:
        var translateFor = args.slice(1).join(" ")
        if (!translateFor) {
          message.channel.send({embed: {
            color: 3447003,
            title: 'translate',
            description: 'Translate the string given. First argument is language-code and second argument is string to translate. [Looking for language-code table](http://help.bingads.microsoft.com/apex/index/18/en/10004)?'
          }})
        } else {
          if (args[0] === 'braille') {
            var messageToBraille = args.slice(1).join(" ")
            var messageToBrailleResult = braille.toBraille(`${messageToBraille}`)
            message.channel.send({embed: {
              color: 4620980,
              title: 'translate',
              description: `**From __English__ To __Braille__:** ${messageToBrailleResult}`
            }})
            return
          } else if (args[0] === 'text') {
            var brailleToText = args.slice(1).join(" ")
            var brailleToTextResult = braille.toText(`${brailleToText}`)
            message.channel.send({embed: {
              color: 4620980,
              title: 'translate',
              description: `**From __Braille__ to __English__:** ${brailleToTextResult}`
            }})
            return
          }
          translate(`${translateFor}`, {to: `${args[0]}`}).then(res => {
            message.channel.send({embed: {
              color: 4620980,
              title: 'translate',
              description: `**From __${res.from.language.iso}__ To __${args[0]}__:** ${res.text}`
            }})
            return
          }).catch(error => {
            message.channel.send({embed: {
              color: 4620980,
              title: 'Error',
              description: `${error}`
            }})
          })
        }
        return
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['번역'],
  permLevel: 0
}

exports.help = {
  name: 'translate',
  description: 'Translate in Discord anytime when you want.',
  usage: 'translate <languagecode> <string>'
}
