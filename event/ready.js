const int = require('../int.json')
module.exports = client => {
  console.log(`Signed as ${client.user.tag}`)

  client.user.setActivity(`${int.activity}`)
  console.log(`Client user activity setted as ${int.activity}`)

  // Discord Bot List Patch
  const DBL = require("dblapi.js")
  const dbl = new DBL(process.env.dbl_token)
  setInterval(() => {
    dbl.postStats(client.guilds.size);
  }, 1000);
}
