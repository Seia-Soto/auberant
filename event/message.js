const translate = require('google-translate-api')
const int = require('../int.json')
module.exports = message => {
  if (message.author.bot) return
  let client = message.client
  if (!message.content.startsWith(int.prefix)) return

  let react = message.content.split(' ')[0].slice(int.prefix.length)
  let args = message.content.split(' ').slice(1)
  let perms = client.elevation(message)
  translate(react, {to: 'en'}).then(res => { let requestLanguage = res.from.language.iso })
  let rct

  if (client.reacts.has(react)) {
    rct = client.reacts.get(react)
  } else if (client.aliases.has(react)) {
    rct = client.reacts.get(client.aliases.get(react))
  }
  if (rct) {
    if (perms < rct.conf.permLevel) return
    rct.run(client, message, args, perms, requestLanguage)
  }
}
