exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // messageDescriptions
  let messageTitle = `Ping`
  let messageDescription_pinging = `Pinging..`
  let messageDescription = `Pong! Took ${ping.createdTimestamp - message.createdTimestamp}ms.`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `질의`
      messageDescription_pinging = `요청 중..`
      messageDescription = `요청이 반환되었습니다! ${ping.createdTimestamp - message.createdTimestamp}ms가 소요되었습니다.`
      errorTitle = `오류`
      break;
  }
  message.channel.send({embed: {
    color: 4620980,
    title: `${messageTitle}`,
    description: `${messageDescription_pinging}`
  }}).then((ping) => {
    ping.edit({embed: {
      color: 4620980,
      title: `${messageTitle}`,
      description: `${messageDescription}`
    }})
  })
  .catch(console.error)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['질의'],
  permLevel: 0
}

exports.help = {
  name: 'ping',
  description: 'Load Auberant API respones time.',
  usage: 'ping'
}
