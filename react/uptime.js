const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  format(seconds) => {
  pad(s) => {
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        message.channel.send({embed: {
              color: 4620980,
              title: '업타임',
              description: `${require('os').uptime()}`
            }})
        break;
      default:
        message.channel.send({embed: {
              color: 4620980,
              title: 'uptime',
              description: `${require('os').uptime()}`
            }})
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['업타임'],
  permLevel: 0
}

exports.help = {
  name: 'uptime',
  description: 'Get uptime of Auberant.',
  usage: 'uptime'
}
