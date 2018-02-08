exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'text',
      description: `Send ASCii text. Argument is string.`
    }})
    return
  }
  const figlet = require('figlet')

  var messageToASCii = args.slice(0).join(' ')
  figlet.text(`${messageToASCii}`, (error, data) => {
    if (error) {
      console.error(error)
      message.channel.send({embed: {
        color: 3447003,
        title: 'Error',
        description: `${error}`
      }})
      return
    }
    message.channel.send('```' + data + '```')
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['word'],
  permLevel: 0
}

exports.help = {
  name: 'text',
  description: 'Print text to ascii artwork',
  usage: 'text <word>'
}
