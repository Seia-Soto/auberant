const whois = require('whois')
exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'whois',
      description: `Query domain registeration information from ICANN WHOIS. Argument is domain name.`
    }})
  } else {
    whois.lookup(args[0], (error, data) => {
      console.log(data)
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
