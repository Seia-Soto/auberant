exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: '질의',
    description: '요청 중..'
  }}).then((ping) => {
    ping.edit({embed: {
      color: 3447003,
      title: '질의',
      description: `요청이 반환되었습니다! ${ping.createdTimestamp - message.createdTimestamp}ms가 소요되었습니다.`
    }})
  })
  .catch(console.error)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['질의'],
  permLevel: 0
}

exports.help = {
  name: 'ping',
  description: 'Load Auberant API respones time.',
  usage: 'ping'
}
