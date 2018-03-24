exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  var setValueTo = args.slice(1).join(" ")
  switch(args[0]) {
    case 'activity':
      client.user.setActivity(`${setValueTo}`)
      console.log(`Client user's activity setted to ${setValueTo}.`)
      message.reply(`Client user's activity setted to **${setValueTo}**.`)
      break;
    case 'restart':
      console.log(`Restarting at ${new Date()}`)
      message.reply(`Restarting at ${new Date()}`)
      process.exit(0)
      break;
    default:
      message.reply('No entries')
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['settings'],
  permLevel: 3
}

exports.help = {
  name: 'set',
  description: 'Bot configuration tool.',
  usage: 'set <topic> <value>'
}
