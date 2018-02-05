exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'ping',
    description: 'Pinging..',
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/app-icons/406881830185467915/aee5e3748f34a0e6d7fd7c70ebfacbf0.png',
      text: '© auberant 2018, all rights reserved'
    }
  }
  }).then((ping) => {
    ping.edit({embed: {
      color: 3447003,
      title: 'ping',
      description: `Pong! Took ${ping.createdTimestamp - message.createdTimestamp}ms.`,
      timestamp: new Date(),
      footer: {
        icon_url: 'https://cdn.discordapp.com/app-icons/406881830185467915/aee5e3748f34a0e6d7fd7c70ebfacbf0.png',
        text: '© auberant 2018, all rights reserved'
      }
    }
    })
  })
  .catch(console.error)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pong'],
  permLevel: 0
}

exports.help = {
  name: 'ping',
  description: 'Load Auberant API respones time.',
  usage: 'ping'
}
