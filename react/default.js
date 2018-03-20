
const Discord = require('discord.js')
const client = new Discord.Client()

const fs = require('fs')

require('./handler/eventLoader')(client)
const int = require('./int.json')

client.reacts = new Discord.Collection()
client.aliases = new Discord.Collection()

fs.readdir('./react/', (error, reactFiles) => {
  if (error) console.error(error)
  console.log(`Loading a total of ${reactFiles.length} reacts.`)
  reactFiles.forEach(reactFiles => {
    let props = require(`./react/${reactFiles}`)
    console.log(`Loading react: ${props.help.name}.`)
    client.reacts.set(props.help.name, props)
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name)
    })
  })
})

client.elevation = (message, guild) => {
  let permlvl = 0

  let moderator_role = message.guild.roles.find('name', `${int.moderator_rolename}`)
  if (moderator_role && message.member.roles.has(moderator_role.id)) permlvl = 2
  if (message.author.id === int.ownerid) permlvl = 4
  return permlvl
}

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.login(process.env.Discord_API)
client.destroy().then(() => client.login(process.env.Discord_API))
