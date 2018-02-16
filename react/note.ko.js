-const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')
const Notes = new Enmap({ provider: new EnmapLevel({ name: 'note' }) })
exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: '노트',
      description: 'Auberant에서 노트를 써보세요. 먼저 노트를 만들어보세요: ``;노트 새로만들기 <내용>``. 그리고 ``;노트 열기 <ID>``로 열어보세요.\n\n노트는 Auberant가 업데이트할 때 언제든지 사라질 수 있습니다. 비밀번호 또는 개인정보를 Auberant에 저장하지 마세요. 저희는 유실된 노트 또는 개인정보에 대해 책임지지 않습니다. :P'
    }})
    return
  }
  switch (args[0]) {
    case '새로만들기':
      var contentToNote = args.slice(1).join(' ')
      var contentHeaderID = Math.floor(Math.random() * 9999) + 1
      Notes.set(`${contentHeaderID}`, `${contentToNote}`)

      message.channel.send({embed: {
        color: 3447003,
        title: '노트',
        description: `이제 저장된 노트를 Auberant가 있는 어디에서나 열 수 있습니다! 노트의 ID는 **${contentHeaderID}**입니다. 다른 누군가가 이 ID를 사용하지 않기를 빌죠...`
      }})
      break;
    case '열기':
      if (!args[1]) {
        message.channel.send({embed: {
          color: 3447003,
          title: '노트',
          description: `예상치 않은 문제가 생겼어요! 노트의 ID가 주어지지 않았잖아요. :P`
        }})
      } else {
        message.channel.send({embed: {
          color: 3447003,
          title: '노트',
          description: `${Notes.get(args[1])}`,
          footer: {
            text: `#${args[1]}`
          }
        }})
      }
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['노트'],
  permLevel: 0
}

exports.help = {
  name: 'note-ko',
  description: 'Take notes on Auberant :P',
  usage: 'note-ko <content>'
}
