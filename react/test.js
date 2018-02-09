exports.run = (client, message, args) => {
  message.reply('Hey!')
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
}

exports.help = {
  name: 'test',
  description: 'test',
  usage: 'test'
}
