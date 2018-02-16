exports.run = (client, message, args) => {
  const translate = require('google-translate-api')
  const braille = require('braille')

  var translateFor = args.slice(1).join(" ")

  if (!translateFor) {
    message.channel.send({embed: {
      color: 3447003,
      title: '번역',
      description: '주어진 단어 또는 문장을 번역합니다. 첫번째 인수는 언어코드이며 두번째 인수는 문자열입니다.'
    }})
  } else {
    if (args[0] === 'braille' || args[0] === '점자') {
      var messageToBraille = args.slice(1).join(" ")
      var messageToBrailleResult = braille.toBraille(`${messageToBraille}`)
      message.channel.send({embed: {
        color: 3447003,
        title: 'translate',
        description: `**__영어__에서 __점자__로:** ${messageToBrailleResult}`
      }})
      return
    } else if (args[0] === 'text' || args[0] === '텍스트') {
      var brailleToText = args.slice(1).join(" ")
      var brailleToTextResult = braille.toText(`${brailleToText}`)
      message.channel.send({embed: {
        color: 3447003,
        title: '번역',
        description: `**__점자__에서 __영어__로:** ${brailleToTextResult}`
      }})
    }
    translate(`${translateFor}`, {to: `${args[0]}`}).then(res => {
      message.channel.send({embed: {
        color: 3447003,
        title: '번역',
        description: `**__${res.from.language.iso}__에서 __${args[0]}__로:** ${res.text}`
      }})
      return
    }).catch(error => {
      message.channel.send({embed: {
        color: 3447003,
        title: '오류',
        description: `${error}`
      }})
    })
  }
  return
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['번역'],
  permLevel: 0
}

exports.help = {
  name: 'translate.ko',
  description: 'Translate in Discord anytime when you want.',
  usage: 'translate.ko <languagecode> <string>'
}
