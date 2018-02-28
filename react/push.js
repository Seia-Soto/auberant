exports.run = (client, message, args) => {
  if (args[0] === 'to:here') {
    message.guild.channels.find('name', 'push').send({embed: {
      color: 4620980,
      title: args.slice(1).join(' ').split(' content:')[0],
      description: args.slice(1).join(' ').split(' content:')[1]
    }})
    return
  }
  var guildList = client.guilds.array()
  try {
    guildList.forEach(guild => message.guild.channels.find('name', 'push').send({embed: {
      color: 4620980,
      title: args.slice(1).join(' ').split(' content:')[0],
      description: args.slice(1).join(' ').split(' content:')[1]
    }}))
  } catch (error) {
    message.channel.send({
      color: 4620980,
      title: 'push',
      description: `Could not send push notifications to __${guild.name}__!`
    })
  }
  message.channel.send({
    color: 4620980,
    title: 'push',
    description: 'Notifications are pushed to servers!'
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'push',
  description: 'Push events',
  usage: 'push'
}
