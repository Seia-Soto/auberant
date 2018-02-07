exports.run = (client, message, args) => {
  var messageToNotice = args.slice(0).join(' ')
  client.guilds.forEach( guild => guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES").send({embed: {
    color: 3447003,
    title: 'post',
    description: `${messageToNotice}`
  }
  }))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['annoncement'],
  permLevel: 4
}

exports.help = {
  name: 'post',
  description: 'Send notice to each guild',
  usage: 'post <string>'
}
