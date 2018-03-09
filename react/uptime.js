const translate = require('google-translate-api')
const int = require('../int.json')
String.prototype.toHHMMSS = () => {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}
var time = process.uptime()
var uptime = (time + "").toHHMMSS()
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        message.channel.send({embed: {
              color: 4620980,
              title: '업타임',
              description: `${uptime}`
            }})
        break;
      default:
        message.channel.send({embed: {
              color: 4620980,
              title: 'uptime',
              description: `${uptime}`
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
