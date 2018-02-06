const int = require('../int.json')
exports.run = (client, message, params) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'This is title',
    description: `This is description area`,
    fields: [
      {
        name: `prefix`,
        value: `${int.prefix}`
      },
      {
        name: `Markdown`,
        value: `You can use **Markdown** in here!`
      }
    ]
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/app-icons/406881830185467915/aee5e3748f34a0e6d7fd7c70ebfacbf0.png',
      text: '© auberant 2018, all rights reserved'
    }
  }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temp'],
  permLevel: 4
}

exports.help = {
  name: 'template',
  description: 'Displays settings',
  usage: 'template'
}
