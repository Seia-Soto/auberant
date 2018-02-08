exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'cash',
      description: '**Open**: open your account\n``;cash open``\n\n**Send**: send your money to others\n``;cash send account-id amount``\n\nYou can earn them by chat and type ``;shop`` to open shop!'
    }})
    return
  }
  let points = JSON.parse(fs.readFileSync('../src/cash.json', "utf8"))
  switch (args[0]) {
    case 'open':
      if (!account[message.author.id]) account[message.author.id] = {
        points: 0,
        level: 0
      }
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ink'],
  permLevel: 0
}

exports.help = {
  name: 'cash',
  description: 'Get cashes and buy something in Auberant-SHOP!',
  usage: 'cash <open | send> <optional:account-id> <optional:string>'
}
