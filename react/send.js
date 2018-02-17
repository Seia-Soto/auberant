exports.run = (client, message, args) => {
  setInterval(() => {
    client.channels.get(339011161481674753).send('>js console.log++;')
  }, 5000);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
}

exports.help = {
  name: 'send',
  description: 'Send embed messages.',
  usage: 'send <title> <message>'
}
