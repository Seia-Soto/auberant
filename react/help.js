exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'help',
    description: `With ${client.user.size} people in ${client.guild.size} servers!`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['docs'],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'How to use',
  usage: 'help'
}
