
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

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./react/${command}`)]
      let rct = require(`./react/${command}`)
      client.commands.delete(command)
      client.aliases.forEach((rct, alias) => {
        if (rct === command) client.aliases.delete(alias);
      })
      client.commands.set(command, rct)
      rct.conf.aliases.forEach(alias => {
        client.aliases.set(alias, rct.help.name)
      })
      resolve()
    } catch (error){
      reject(error)
    }
  })
}

client.elevation = (message, guild) => {
  let permlvl = 0
  let moderator_role = message.guild.roles.find('name', `${int.moderator_rolename}`)
  if (moderator_role && message.member.roles.has(moderator_role.id)) permlvl = 2
  let administrator_role = message.guild.roles.find('name', `${int.administrator_rolename}`)
  if (administrator_role && message.member.roles.has(administrator_role.id)) permlvl = 3
  if (message.author.id === int.ownerid) permlvl = 4
  return permlvl
}

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.login(process.env.token)
client.destroy().then(() => client.login(process.env.token))
