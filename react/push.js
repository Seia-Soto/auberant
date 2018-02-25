exports.run = (client, message, args) => {
  client.channels.get('416448554945478666').send({
    to: 416448554945478666,
    embed: {
    color: 4620980,
    title: `${args.slice(0).join(' ').split('_content:')[0]}`,
    description: `${args.slice(0).join(' ').split('_content:')[1]}`
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
