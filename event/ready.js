const int = require('../int.json')
module.exports = client => {
  console.log(`Signed as ${client.user.tag}`)

  client.user.setActivity(`${int.activity}`)
  console.log(`Client user activity setted as ${int.activity}`)
  console.log(`${client.users.size} users in ${client.guilds.size} servers`)
}
