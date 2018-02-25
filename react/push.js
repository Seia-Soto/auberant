exports.run = (client, message, args) => {
  client.channels.get('416448554945478666').send({embed: {
    color: 4620980,
    title: `${args[0]}`,
    description: `${args.slice(1).join(' ')}`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'partners'
}

exports.help = {
  name: 'push',
  description: 'Push events',
  usage: 'push'
}
