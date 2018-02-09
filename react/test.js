exports.run = (client, message, args) => {
  message.reply('Hey!')
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pong', '핑', '퐁'],
  permLevel: 2
}

exports.help = {
  name: 'test',
  description: 'test',
  usage: 'test'
}
