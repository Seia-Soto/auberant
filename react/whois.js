exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // messageDescriptions
  let messageTitle = `Whois`
  let messageDescription = `Query WHOIS databases. Argument is string.`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `후이즈`
      messageDescription = `후이즈 데이터베이스를 쿼리합니다. 안수는 문자열입니다.`
      errorTitle = `오류`
      break;
  }
  if (!arg) {
    message.channel.send({embed: {
      color: 4620980,
      title: `${messageTitle}`,
      description: `${messageDescription}`
    }})
  } else {
    whois.lookup(`${arg}`, (error, data) => {
      message.channel.send({embed: {
        color: 4620980,
        title: `${messageTitle}`,
        description: `${data.substring(0, 2000)}`
      }})
    })
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`후이즈`],
  permLevel: 0,
  name: `whois`
}
