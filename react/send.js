exports.run = (client, message, args) => {
  message.delete()
  message.channel.send({embed: {
    color: 3447003,
    title: `${args[0]}`,
    description: `${args.slice(1).join(' ')}`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'send',
  description: 'Send embed messages.',
  usage: 'send <title> <message>'
}
