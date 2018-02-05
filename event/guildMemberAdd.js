module.exports = member => {
  const channel = member.guild.channels.find('name', 'member-log')
  if (!channel) return
  channel.send({embed: {
    color: 3447003,
    title: 'guildMemberAdd',
    description: `Hi? **${member}**. I am pleased to meet you!`,
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/app-icons/406881830185467915/aee5e3748f34a0e6d7fd7c70ebfacbf0.png',
      text: '© auberant 2018, all rights reserved'
    }
  }
  })
};
