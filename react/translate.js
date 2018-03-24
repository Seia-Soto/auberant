const translate = require('google-translate-api')
const braille = require('braille')
exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // messageDescriptions
  let messageTitle = `Translate`
  let messageDescription = `Translate the string. First argument is language-code and second one is string.`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `번역`
      messageDescription = `문자열을 번역합니다. 첫 번째 인수는 언어코드이며 두 번째는 문자열입니다.`
      errorTitle = `오류`
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['번역'],
  permLevel: 0,
  name: `translate`
}
