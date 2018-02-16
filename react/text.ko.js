exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: '텍스트',
      description: `ASCii 문자열을 전송합니다. 인수는 문자열입니다.`
    }})
    return
  }
  const figlet = require('figlet')

  var messageToASCii = args.slice(0).join(' ')
  figlet.text(`${messageToASCii}`, (error, data) => {
    if (error) {
      console.error(error)
      message.channel.send({embed: {
        color: 3447003,
        title: '오류',
        description: `${error}`
      }})
      return
    }
    message.channel.send('```' + data + '```')
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'text-ko',
  description: 'Print text to ascii artwork',
  usage: 'text-ko <word>'
}
