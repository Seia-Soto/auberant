exports.run = (client, message, args) => {
  const translate = require('google-translate-api')
  const braille = require('braille')

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
        color: 3447003,
        title: 'translate',
        description: `**From __English__ To __Braille__:** ${messageToBrailleResult}`
      }})
      return
    } else if (args[0] === 'text') {
      var brailleToText = args.slice(1).join(" ")
      var brailleToTextResult = braille.toText(`${brailleToText}`)
      message.channel.send({embed: {
        color: 3447003,
        title: 'translate',
        description: `**From __Braille__ to __English__:** ${brailleToTextResult}`
      }})
    }
    translate(`${translateFor}`, {to: `${args[0]}`}).then(res => {
      message.channel.send({embed: {
        color: 3447003,
        title: 'translate',
        description: `**From __${res.from.language.iso}__ To __${args[0]}__:** ${res.text}`
      }})
      return
    }).catch(error => {
      message.channel.send({embed: {
        color: 3447003,
        title: 'Error',
        description: `${error}`
      }})
    })
  }
  return
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'translate',
  description: 'Translate in Discord anytime when you want.',
  usage: 'translate <languagecode> <string>'
}
