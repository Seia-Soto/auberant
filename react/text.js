exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'text',
      description: `Send ASCII text. Argument is string.`
    }
    })
    return
  }
  const figlet = require('figlet')
  figlet.text(`${args[0]}`, (error, data) => {
    if (error) {
      console.error(error)
      message.channel.send({embed: {
        color: 3447003,
        title: 'Error',
        description: `${error}`
      }
      })
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
