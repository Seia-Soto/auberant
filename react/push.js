exports.run = (client, message, args) => {
  message.channels.find('name', 'push').send({embed: {
    color: 4620980,
    title: `${args.slice(0).join(' ').split(' content:')[0]}`,
    description: `${args.slice(0).join(' ').split(' content:')[1]}`
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
