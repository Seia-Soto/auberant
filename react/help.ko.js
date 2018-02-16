exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'help',
    description: `**Auberant 1.2.1**, ${client.guilds.size}개의 서버들과 함께 있습니다!\n[웹사이트나 문서](https://auberant.tk)를 찾고 계신가요?\n\n
;도움말 *권한:Everyone*
;노트 *권한:Everyone*
;질의 *권한:Everyone*
;텍스트 *권한:Everyone*
;번역 *권한:Everyone*
`
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
  description: 'Auberant, Discord bot.',
  usage: 'help-ko <page>'
}
