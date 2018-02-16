exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'help',
    description: `Auberant 1.2.1, with ${client.guild.size} servers!\nLooking for [documentation or webpage](https://auberant.tk)?\n\n
                  ;help *Everyone*\n
                  ;note *Everyone*\n
                  ;ping *Everyone*\n
                  ;text *Everyone*\n
                  ;translate *Everyone*\n
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
