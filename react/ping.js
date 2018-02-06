exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'ping',
    description: 'Pinging..'
  }
  }).then((ping) => {
    ping.edit({embed: {
      color: 3447003,
      title: 'ping',
      description: `Pong! Took ${ping.createdTimestamp - message.createdTimestamp}ms.`
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
