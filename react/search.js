const google = require('google')
exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // Various
  google.resultsPerPage = 4
  let _nextCounter = 0
  // messageDescriptions
  let messageTitle = `Search`
  let messageDescription = `Search from Google. Argument is string to search.`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `검색`
      messageDescription = `Google에서 검색합니다. 인수는 검색할 문자열입니다.`
      errorTitle = `오류`
      break;
  }
  if (!arg) {
    message.channel.send({embed: {
      color: 4620980,
      title: `${messageTitle}`,
      description: `${messageDescription}`
    }})
  }
  google(`${arg}`, function (error, res) {
    if (error) {
      console.error(error)
      message.channel.send({embed: {
        color: 4620980,
        title: `${errorTitle}`,
        description: `${error}`
      }})
    }
    for (var i = 0; i < res.links.length; ++i) {
      let _link = res.links[i]
      message.channel.send({embed: {
        color: 4620980,
        title: `${messageTitle}`,
        description: `**${[link.title](link.href)}**\n${link.description}\n\n`
      }})
    }
    if (_nextCounter < 4) {
      _nextCounter += 1
      if (res.next) res.next()
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`검색`],
  permLevel: 0,
  name: `search`
}
