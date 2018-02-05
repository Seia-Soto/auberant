const int = require('../int.json')
module.exports = client => {
  console.log(`Signed as ${client.user.tag}`)

  client.user.setActivity(`${int.activity}, { url: 'https://auberant.tk', type: 'STREAMING' }`)
  console.log(`Client user activity setted as ${int.activity}`)
}
