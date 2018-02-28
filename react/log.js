const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')
const story = new Enmap({ provider: new EnmapLevel({ name: 'story' }) })
exports.run = (client, message, args) => {
  switch (args[0]) {
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
    case 'reset':
      if (!message.author.id === '324541397988409355') {
        return
      }
      story.set('story', '의미있는 첫번째 줄..!');
      message.reply('조용히 다음장으로 넘겼다...')
      break;
    default:
      message.reply(`Let의 일기장이예요!\n\n${story.get('story')}`)
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
