exports.run = (client, message, args) => {
  if (!args[0] || !args[1]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'Text',
      description: `Send ASCII text (font: ANSI Shadow). Argument is string.`
    }
    })
    return
  } else if (args[0] == 'font-list') {
    message.channel.send({embed: {
      color: 3447003,
      title: 'Text',
      description: `These are list of fonts!\n\n`
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
