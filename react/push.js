exports.run = (client, message, args) => {
  if (!args[0].includes('what:')) {
    return
  } else {
    let messageToPush = args.slice(1).join(' ')
    switch (args[0].replace('what:', '')) {
      case 'notificate':
        const guild = member.guild
        const channel = guild.channels.find(c=> c.permissionsFor(guild.me).has('SEND_MESSAGES'))
        client.guilds.array.forEach(channel => {
          message.channel.send({embed: {
            color: 4620980,
            title: 'Notificate',
            description: `${messageToPush}`
          }})
        })
        break;
      case 'partnerships':
        client.channels.get(416448554945478666).send({embed: {
          color: 4620980,
          title: 'New partnerships',
          description: `${args.slice(3).join(' ')}\n[${args.slice(1).join(' ').replace('name:', '')}](${args[2].replace('link', '')})`
        }})
        break;
    }
  }
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
