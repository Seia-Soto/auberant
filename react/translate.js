const translate = require('google-translate-api')
const braille = require('braille')
exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // Various
  let _translated = `${res.text}`
  let _original = `${res.from.language.iso}`
  let _todo = `${args.slice(1).join(' ')}`
  let _tobraille = braille.toBraille(`${args[1]}`)
  let _totext = braille.toText(`${args[1]}`)
  let _braille = `braille`
  let _text = `text`
  // messageDescriptions
  let messageTitle = `Translate`
  let messageDescription = `Translate the string. First argument is language-code and second one is string.`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      _braille = `점자`
      _text = `텍스트`
      messageTitle = `번역`
      messageDescription = `문자열을 번역합니다. 첫 번째 인수는 언어코드이며 두 번째는 문자열입니다.`
      errorTitle = `오류`
      break;
  }
  switch (args[0]) {
    case `${_braille}`:
      if (!args[1]) {
        message.channel.send({embed: {
          color: 4620980,
          title: `${messageTitle}`,
          description: `${messageDescription}`
        }})
        return
      }
      message.channel.send({embed: {
        color: 4620980,
        title: `${messageTitle}`,
        description: `**text** to **braille**\n${_tobraille}`
      }})
      break;
    default:
      if (!args[0] || !args[1]) {
        message.channel.send({embed: {
          color: 4620980,
          title: `${messageTitle}`,
          description: `${messageDescription}`
        }})
        return
      }
      translate(_todo, {to: `${args[0]}`}).then(res => {
        message.channel.send({embed: {
          color: 4620980,
          title: `${messageTitle}`,
          description: `**${_original}** to **${args[0]}**\n${_translated}`
        }})
        return
      })
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['번역'],
  permLevel: 0,
  name: `translate`
}
