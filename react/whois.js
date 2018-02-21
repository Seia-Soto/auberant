const whois = require('whois-api')
exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'whois',
      description: `Query domain registeration information from ICANN WHOIS. Argument is domain name.`
    }})
  } else {
    whois.rawLookup(args[0], (error, result) => {
      message.channel.send({embed: {
        color: 3447003,
        title: 'whois',
        description: `${result}`
      }})
    })
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'whois',
  description: 'Query domain registeration information from ICANN WHOIS.',
  usage: 'whois'
}
