const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')
const Notes = new Enmap({ provider: new EnmapLevel({ name: 'note' }) })
exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'note',
      description: 'Take notes on Auberant. Just try: ``;note new <content>``. And open it with ``;note open <ID>``.\n\nA note can disappear when Auberant get new update. Do not keep your password or private thing on Auberant. We are not responsible for any leaked personal information or deleted notes. :P'
    }})
    return
  }
  switch (args[0]) {
    case 'new':
      var contentToNote = args.slice(1).join(' ')
      var contentHeaderID = Math.floor(Math.random() * 9999) + 1
      Notes.set(`${contentHeaderID}`, `${contentToNote}`)

      message.channel.send({embed: {
        color: 3447003,
        title: 'note',
        description: `Now you can open your saved notes anywhere you have Auberant! Note ID is **${contentHeaderID}**. I do not want anyone else to use that ID ...`
      }})
      break;
    case 'open':
      if (!args[1]) {
        message.channel.send({embed: {
          color: 3447003,
          title: 'note',
          description: `There was a problem fetching your notes. The name of the note to import is missing! :P`
        }})
      } else {
        message.channel.send({embed: {
          color: 3447003,
          title: 'note',
          description: `${Notes.get(args[1])}`,
          footer: {
            text: `#${args[1]}`
          }
        }})
      }
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['paperclip', 'memo', '노트', '메모'],
  permLevel: 0
}

exports.help = {
  name: 'note',
  description: 'Take notes on Auberant :P',
  usage: 'note <content>'
}
