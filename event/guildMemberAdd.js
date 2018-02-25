module.exports = (client, member) => {
  if (member.guild.id === '383944425648422912') {
    client.channels.get(416448554945478666).send({embed: {
      color: 3447003,
      title: 'guildMemberAdd',
      description: `Hi, there? Say hello to Auberant! I am pleased to meet you **${member}**!\nPlease look at the rules and remember before you chat. Rules can found on #int `
    }})
    return
  }
  const guild = member.guild
  const channel = guild.channels.find(c=> c.permissionsFor(guild.me).has('SEND_MESSAGES'))
  channel.send({embed: {
    color: 3447003,
    title: 'New member!',
    description: `**${member}**, I am pleased to meet you!`
  }})
}
