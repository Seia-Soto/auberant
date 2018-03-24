const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')
const Notes = new Enmap({ provider: new EnmapLevel({ name: 'note' }) })
exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // Various
  let _id = Math.floor(Math.random() * 9999) + 1
  let _opened = Notes.get(`${args[1]}`)
  // messageDescriptions
  let messageTitle = `Note`
  let messageDescription = `Take notes on Auberant. Just try: \`\`;note new <content>\`\`. And open it with \`\`;note open <ID>\`\`.\n\nA note can disappear when Auberant get new update. Do not keep your password or private thing on Auberant. We are not responsible for any leaked personal information or deleted notes. :P`
  let messageDescription_nocontent = `Can't find any content to save.`
  let messageDescription_saved = `Saved as **#${_id}**.`
  let messageDescription_noid = `Can't interpret id to open.`
  let errorTitle = `Error`
  let _new = `new`
  let _open = `open`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `노트`
      messageDescription = `Auberant에서 노트를 써보세요. 먼저 노트를 만들어보세요: \`\`;노트 새로만들기 <내용>\`\`. 그리고 \`\`;노트 열기 <ID>\`\`로 열어보세요.\n\n노트는 Auberant가 업데이트할 때 언제든지 사라질 수 있습니다. 비밀번호 또는 개인정보를 Auberant에 저장하지 마세요. 저희는 유실된 노트 또는 개인정보에 대해 책임지지 않습니다. :P`
      messageDescription_nocontent = `저장할 내용을 찾을 수 없습니다.`
      messageDescription_saved = `**#${_id}**로 저장되었습니다.`
      messageDescription_noid = `열기 위한 ID를 해석할 수 없습니다.`
      errorTitle = `오류`
      _new = `새로만들기`
      _open = `열기`
      break;
  }
  switch (args[0]) {
    case `${_new}`:
      if (!args.slice(1).join(' ')) {
        message.channel.send({embed: {
          color: 4620980,
          title: `${messageTitle}`,
          description: `${messageDescription_nocontent}`
        }})
        return
      }
      Notes.set(`${_id}`, `${args.slice(1).join(' ')}`)
      message.channel.send({embed: {
        color: 4620980,
        title: `${messageTitle}`,
        description: `${messageDescription_saved}`
      }})
      break;
    case `${_open}`:
      if (!args[1]) {
        message.channel.send({embed: {
          color: 4620980,
          title: `${messageTitle}`,
          description: `${messageDescription_noid}`
        }})
        return
      }
      message.channel.send({embed: {
        color: 4620980,
        title: `${messageTitle}`,
        description: `${_opened}`
      }})
      break;
    default:
      message.channel.send({embed: {
        color: 4620980,
        title: `${messageTitle}`,
        description: `${messageDescription}`
      }})
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['노트'],
  permLevel: 0
}

exports.help = {
  name: 'note',
  description: 'Take notes on Auberant :P',
  usage: 'note <content>'
}
