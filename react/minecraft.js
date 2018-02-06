const ms = require('../handler/minecraft.js')
exports.run = (client, message, args) => {
  if (!args[0] || !args[1]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'minecraft',
      description: `Load minecraft server's info. First argument is server's IP or domain name and second is port.`
    }
    })
    return
  }
  ms.init(`${args[0]}`, `${args[1]}`, (result) => {
    if (ms.online) {
      message.channel.send({embed: {
        color: 3447003,
        title: 'minecraft',
        description: `**${ms.motd}** (${args[0]}:${args[1]})\n\n__Version__: ${ms.version}\n__Players__: ${ms.current_players} of ${ms.max_players}`
      }
      })
    } else {
      message.channel.send({embed: {
        color: 3447003,
        title: 'minecraft',
        description: `**${ms.motd}** (${args[0]}:${args[1]})\n\nServer is offline!`
      }
      })
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mc', 'server'],
  permLevel: 4
}

exports.help = {
  name: 'minecraft',
  description: `Load minecraft server's info. First argument is server's IP or domain name and second is port.`,
  usage: 'minecraft'
}
