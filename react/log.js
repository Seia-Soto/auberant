const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')
const story = new Enmap({ provider: new EnmapLevel({ name: 'story' }) })
exports.run = (client, message, args) => {
  switch (args[0]) {
    case 'reset':
      if (!message.author.bot && message.author.tag === 'Let#5959') {
        story.set('story', 'Let, 悲しい そして 平凡な ツンデレ 学生。\n私はあなたが最初の行に特別な何かを書くことを願っています...！')
        message.reply('다음장으로 조용히 넘겼답니다..')
      }
      break;
    case 'write':
      if (!args[1]) {
        message.reply('내용은 써주셔야죠 ㅠㅠ..')
        return
      }
      var messageToWrite = args.slice(1).join(' ')
      var story_ = story.get('story') + `\n${message.author.username}: ${messageToWrite}`
      story.set('story', `${story_}`)
      message.reply('성공적으로 썼어요!')
      break;
    default:
      message.reply(`Let의 일기장이예요!\n\n${story.get('story')}`)
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'let',
  description: 'The note of Let',
  usage: 'let write <content>'
}
