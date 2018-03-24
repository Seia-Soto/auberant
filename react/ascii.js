const figlet = require(`figlet`)
exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // messageDescriptions
  let messageTitle = `Ascii`
  let messageDescription = `Send ASCii artworks. Argument is string.`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `아스키`
      messageDescription = `ASCii 문자열을 전송합니다. 인수는 영문 문자열입니다.`
      errorTitle = `오류`
      break;
    case 'zh-chs':
      messageTitle = `Ascii`
      messageDescription = `发送ASCil字符串. 参数是英语字符串.`
      errorTitle = `错误`
      break;
  }
  if (!args[0]) {
    message.channel.send({embed: {
      color: 4620980,
      title: `${messageTitle}`,
      description: `${messageDescription}`
    }})
    return
  }
  figlet.text(`${arg}`, (error, data) => {
    if (error) {
      console.error(error)
      message.channel.send({embed: {
        color: 4620980,
        title: `${errorTitle}`,
        description: `${error}`
      }})
      return
    }
    message.channel.send('``` ' + data + ' ```')
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`아스키`],
  permLevel: 0,
  name: `ascii`
}
