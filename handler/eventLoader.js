const reqEvent = (event) => require(`../event/${event}`)
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client))
  client.on('reconnecting', () => reqEvent('reconnecting')(client))
  client.on('disconnect', () => reqEvent('disconnect')(client))
  client.on('message', reqEvent('message'))
  client.on('guildMemberAdd', reqEvent('guildMemberAdd')(client))
};
