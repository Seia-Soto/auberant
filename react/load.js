exports.run = (client, message, args) => {
  const Discord = require('discord.js')
  const embed = new Discord.RichEmbed()
    .setTitle('load')
    .setColor(3447003)
    .setImage('../src/load.gif')
  message.channel.send({embed}).then((load) => {
    setTimeout(() => {
      load.edit({embed: {
        color: 3447003,
        title: 'load',
        description: 'All settings are reloaded!'
      }
      })
    }, 4500)
  .catch(console.error)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'load',
  description: 'Just loading. lmao',
  usage: 'load'
}
