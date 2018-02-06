exports.run = (client, message, args) => {
  let react
  if (client.commands.has(args[0])) {
    react = args[0]
  } else if (client.aliases.has(args[0])) {
    react = client.aliases.get(args[0])
  }
  if (!react) {
    return message.channel.send({embed: {
      color: 3447003,
      title: 'reload',
      description: `:eyes: Searching **${args[0]}.js** from server..`,
      timestamp: new Date()
    }
    })
  } else {
    message.channel.send(`Reloading: ${react}`).then(modify => {
      client.reload(react).then(() => {
        modify.edit(`Successfully reloaded: ${react}`)
      }).catch(error => {
        modify.edit(`Command reload failed: ${react}\n\`\`\`${e.stack}\`\`\``);
      })
    })
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reset'],
  permLevel: 3
}

exports.help = {
  name: 'reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>'
}
