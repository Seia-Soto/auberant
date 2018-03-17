exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  let messageTitle = `Avatar`
  let messageDescription = `Avatar of ${message.author.tag}`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `프로필사진`
      messageDescription = `${message.author.tag}님의 프로필사진`
      errorTitle = `오류`
      break;
  }
  message.channel.send({embed: {
    color: 4620980,
    title: `${messageTitle}`,
    description: `${messageDescription}\n${message.author.avatarURL}`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`프로필사진`],
  permLevel: 0
}

exports.help = {
  name: `avatar`,
  description: `Get avatar url of message author.`,
  usage: `avatar`
}
