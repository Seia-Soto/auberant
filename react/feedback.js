exports.run = (client, message, args) => {

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['피드백', 'suggest'],
  permLevel: 0
}

exports.help = {
  name: 'feedback',
  description: 'Send suggestion or bug-tracker info to Auberant.',
  usage: 'feedback <content>'
}
