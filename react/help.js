exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'help',
    description: `**Auberant 1.2.1**, with ${client.guilds.size} servers!\nLooking for [documentation or webpage](https://auberant.tk)?\n\n
;help *Permissions:Everyone*
;note *Permissions:Everyone*
;ping *Permissions:Everyone*
;text *Permissions:Everyone*
;translate *Permissions:Everyone*
`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'Auberant, Discord bot.',
  usage: 'help <page>'
}
