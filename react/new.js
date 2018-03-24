exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // messageDescriptions
  let messageTitle = `Test`
  let messageDescription = `Executes test command.`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `테스트`
      messageDescription = `테스트 명령어를 실행합니다.`
      errorTitle = `오류`
      break;
  }
  message.channel.send({embed: {
    color: 4620980,
    title: `${messageTitle}`,
    description: `${messageDescription}`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`테스트`],
  permLevel: 11,
  name: `test`
}
