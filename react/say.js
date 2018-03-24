exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // messageDescriptions
  let messageTitle = `Say`
  let messageDescription = `${arg}`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `말하기`
      messageDescription = `${arg}`
      errorTitle = `오류`
      break;
  }
  message.reply(`${messageDescription}`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`말하기`],
  permLevel: 11
}

exports.help = {
  name: `say`,
  description: `test`,
  usage: `say <flag> <message>`
}
