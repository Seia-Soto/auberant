exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: '도움말',
    description: `${client.guilds.size}개의 서버들과 함께하고 있습니다!\n[Auberant의 웹페이지에서 자세한 도움말보기](https://auberant.tk)`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['도움말'],
  permLevel: 0
}

exports.help = {
  name: 'help-ko',
  description: 'Auberant Discord bot help documentation.',
  usage: 'help-ko'
}
