exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 4620980,
    title: 'Test',
    description: `@Tree#0248 `
  }})
  message.channel.send({embed: {
    color: 4620980,
    title: 'Test',
    description: `@129663311259107328`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'administrator'
}

exports.help = {
  name: 'say',
  description: 'Push events',
  usage: 'push'
}
