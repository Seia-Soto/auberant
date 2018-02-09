const Enmap = require('enmap')
const account = new Enmap({name: 'account'})
exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'account',
      description: '**Open:** open your account\n``;account open <optional:account-id>``'
    }})
    return
  }
  switch (args[0]) {
    case 'open':
      if (!args[1]) {
        const openAccount = account.get(message.author.username)
        if (!openAccount) {
          message.channel.send({embed: {
            color: 3447003,
            title: 'account',
            description: `Can't find account:${message.author.username}.\nYou can create your account with using **;account create**.`
          }})
          return
        } else {
          message.channel.send({embed: {
            color: 3447003,
            title: 'account',
            description: `There is ${openAccount} inks in account:${message.author.username}.`
          }})
          return
        }
      } else {
        const openAccount = account.get(args[1])
        if (!openAccount) {
          message.channel.send({embed: {
            color: 3447003,
            title: 'account',
            description: `Can't find account:${args[1]}.`
          }})
          return
        } else {
          message.channel.send({embed: {
            color: 3447003,
            title: 'account',
            description: `There is ${openAccount} inks in account:${args[1]}.`
          }})
          return
        }
      }
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ink', 'cash', 'money'],
  permLevel: 0
}

exports.help = {
  name: 'account',
  description: 'Your inks!',
  usage: 'account'
}
