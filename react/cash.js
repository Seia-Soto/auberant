const db = require('sqlite')
db.open(`../src/cash.db`)
exports.run = (client, message, args) => {
  if (!args[0] || !args[1]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'cash',
      description: '**Open**: open your account\n``;cash open``\n\n**Send**: send your money to others\n``;cash send account-id amount``\n\nYou can earn cashes by chatting. 2 inks per message!'
    }})
    return
  } else if (args[0] === 'open') {
    message.channel.send({embed: {
      color: 3447003,
      title: 'cash',
      description: 'Loading your account...\nThis task may be take a long time, if there are many requests.'
    }}).then((openCash) => {
      db.get(`SELECT * FROM cash WHERE account = ${message.author.id}`).then(row => {
        if (!row) {
          db.run('INSERT INTO cash (account, balance, private) VALUES (?, ?, ?)', [message.author.id, 2, Math.floor(Math.random() * (9998 - 1111 + 1)) + 1111])
          openCash.edit({embed: {
            color: 3447003,
            title: 'cash',
            description: `**Account ID** ${message.author.id}\n**Owner** @${message.author.tag}\n\n**Balance** 2 inks`
          }})
          db.get(`SELECT * FROM cash WHERE account = ${message.author.id}`).then(row => {
            message.author.send({embed: {
              color: 3447003,
              title: 'cash',
              description: `Your account(ID: ${message.author.id}) created at ${new Date()}.\n\n**Account private**: ${row.private}\nThe private is using when you are going to do important things.`
            }})
            message.pin()
          }).catch((error) => {
            openCash.edit({embed: {
              color: 3447003,
              title: 'Error',
              description: `${error}`
            }})
            return
          })
          return
        }
        openCash.edit({embed: {
          color: 3447003,
          title: 'cash',
          description: `**Account ID** ${message.author.id}\n**Owner** @${message.author.tag}\n\n**Balance** ${row.balance} inks`
        }})
      }).catch((error) => {
        openCash.edit({embed: {
          color: 3447003,
          title: 'Error',
          description: `${error}`
        }})
        return
      })
    })
  } else if (args[0] === 'send') {
    if (!args[1] || !args[2]) {
      message.channel.send({embed: {
        color: 3447003,
        title: 'cash',
        description: '**Open**: open your account\n``;cash open``\n\n**Send**: send your money to others\n``;cash send account-id amount``\n\nYou can earn cashes by chatting. 2 inks per message!'
      }})
      return
    }
    let account_idisNaN = isNaN(args[1])
    let amountisNaN = isNaN(args[2])
    if (account_idisNaN === 'true' || amountisNaN === 'true') {
      message.channel.send({embed: {
        color: 3447003,
        title: 'cash',
        description: '**Open**: open your account\n``;cash open``\n\n**Send**: send your money to others\n``;cash send account-id amount``\n\nYou can earn cashes by chatting. 2 inks per message!'
      }})
      return
    }
    message.channel.send({embed: {
      color: 3447003,
      title: 'cash',
      description: 'Loading your account...\nThis task may be take a long time, if there are many requests.'
    }}).then((sendCash) => {
      db.get(`SELECT * FROM cash WHERE account = ${message.author.id}`).then(row => {
        if (!row) {
          sendCash.edit({embed: {
            color: 3447003,
            title: 'cash',
            description: 'There is no account matched with provided id. Check your account by using ``;cash open``. If there is no account, it will create yours.'
          }})
          return
        }
        if (row.balance < args[2]) {
          sendCash.edit({embed: {
            color: 3447003,
            title: 'cash',
            description: `Your balance have to bigger then provided amount.\n**Balance**: ${row.balance}\n**Provided**: ${args[2]}`
          }})
          return
        }
      }).catch((error) => {
        sendCash.edit({embed: {
          color: 3447003,
          title: 'Error',
          description: `${error}`
        }})
        return
      })

      sendCash.edit({embed: {
        color: 3447003,
        title: 'cash',
        description: `Loading account:${args[1]}...\nThis task may be take a long time, if there are many requests.`
      }})
      db.get(`SELECT * FROM cash WHERE account = ${args[1]}`).then(row => {
        if (!row) {
          sendCash.edit({embed: {
            color: 3447003,
            title: 'cash',
            description: `Can't find account:${args[1]}. Please make sure account id correct.`
          }})
        }
      }).catch((error) => {
        sendCash.edit({embed: {
          color: 3447003,
          title: 'Error',
          description: `${error}`
        }})
        return
      })
      sendCash.edit({embed: {
        color: 3447003,
        title: 'cash',
        description: 'Withdrawing your account...\nThis task may be take a long time, if there are many requests.'
      }})
      db.run(`UPDATE cash SET balance = ${row.balance - args[2]} WHERE account = ${message.author.id}`)
      sendCash.edit({embed: {
        color: 3447003,
        title: 'cash',
        description: `Depositing ${args[2]} inks to account:${args[1]}...\nThis task may be take a long time, if there are many requests.`
      }})
      db.run(`UPDATE cash SET balance = ${row.balance + args[2]} WHERE account = ${args[1]}`)
      sendCash.edit({embed: {
        color: 3447003,
        title: 'cash',
        description: `Sent ${args[2]} inks to account:${args[1]}.`
      }})
      message.author.send({embed: {
        color: 3447003,
        title: 'cash',
        description: `Send ${args[2]} to account:${args[1]}.`
      }})
    })
  } else if (args[0] === 'close') {
    message.channel.send({embed: {
      color: 3447003,
      title: 'cash',
      description: 'Closing your account...'
    }}).then((closeCash) => {
      if (!args[1]) {
        closeCash.edit({embed: {
          color: 3447003,
          title: 'cash',
          description: `Please specific account private before closing your account. (Argument is your account private)`
        }})
        return
      }
      db.get(`SELECT * FROM cash WHERE account = ${message.author.id}`).then(row => {
        if (!row) {
          closeCash.edit({embed: {
            color: 3447003,
            title: 'cash',
            description: `Can't find your account. Canceling tasks...`
          }})
          return
        }
      }).catch((error) => {
        closeCash.edit({embed: {
          color: 3447003,
          title: 'Error',
          description: `${error}`
        }})
        return
      })
      if (args[0] === row.private) {
        closeCash.edit({embed: {
          color: 3447003,
          title: 'cash',
          description: `Closing your account...`
        }})
      } else {
        closeCash.edit({embed: {
          color: 3447003,
          title: 'cash',
          description: `Your account private isn't correct.`
        }})
      }
    })
    .catch(console.error)

  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['money', '돈'],
  permLevel: 0
}

exports.help = {
  name: 'cash',
  description: 'Get cashes and buy something in Auberant-SHOP!',
  usage: 'cash <open | send> <optional:account-id> <optional:string>'
}
