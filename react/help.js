exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'help',
    description: `**With ${client.users.size} people in ${client.guilds.size} servers!\n[Documentation (https://auberant.tk)](https://auberant.tk/products/bot)`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['docs', '도움'],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'How to use',
  usage: 'help'
}
