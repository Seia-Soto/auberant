const translate = require('google-translate-api')
const int = require('../int.json')
module.exports = message => {
  if (message.author.bot) return
  const client = message.client
  if (!message.content.startsWith(int.prefix)) return

  const react = message.content.split(' ')[0].slice(int.prefix.length)
  const args = message.content.split(' ').slice(1)
  const arg = args.slice(0).join(' ')
  const perms = client.elevation(message)
  translate(react, {to: 'en'}).then(res => {
    const requestLanguage = res.from.language.iso
    let rct
    if (client.reacts.has(react)) {
      rct = client.reacts.get(react)
    } else if (client.aliases.has(react)) {
      rct = client.reacts.get(client.aliases.get(react))
    }
    if (rct) {
      if (perms < rct.conf.permLevel) return
      rct.run(client, message, int, args, arg, perms, requestLanguage)
    }
  })
}
