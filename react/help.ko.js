exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'help',
    description: `Auberant 1.2.1, ${client.guilds.size}개의 서버들과 함께 있습니다!\n[웹사이트나 문서](https://auberant.tk)를 찾고 계신가요?\n\n
                  ;도움말 *Everyone*\n
                  ;노트 *Everyone*\n
                  ;질의 *Everyone*\n
                  ;텍스트 *Everyone*\n
                  ;번역 *Everyone*\n
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
