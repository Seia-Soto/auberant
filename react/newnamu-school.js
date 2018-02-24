const Discord = require('discord.js')
exports.run = (client, message, args) => {
  switch (message.content) {
    case ';학생증':
    let teacherrole = message.guild.roles.find('name', '교수')
    let adminrole = message.guild.roles.find('name', '교장')
    let studentrole = message.guild.roles.find('name', '학생')
    let moneypersonrole = message.guild.roles.find('name', '이사장')
    if (studentrole && message.member.roles.has(studentrole.id)) {
      let studentrole_first = message.guild.roles.find('name', '초등학생')
      let studentrole_second = message.guild.roles.find('name', '중학생')
      let studentrole_thrid = message.guild.roles.find('name', '고등학생')
      if (studentrole && message.member.roles.has(studentrole_first.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 초등학생. (~13세)`)
      } else if (studentrole && message.member.roles.has(studentrole_second.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 중학생. (~16세)`)
      } else if (studentrole && message.member.roles.has(studentrole_thrid.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 고등학생. (~19세)`)
      }
    } else if (adminrole && message.member.roles.has(adminrole.id)) {
      var embed = new Discord.RichEmbed()
        .setColor(4620980)
        .setTitle(`${message.author.tag}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .setURL(`${message.author.avatarURL}`)
        .setDescription(`**${message.author.username} 교장**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에서 교장직을 수여함.`)
    } else if (teacherrole && message.member.roles.has(teacherrole.id)) {
      var embed = new Discord.RichEmbed()
        .setColor(4620980)
        .setTitle(`${message.author.tag}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .setURL(`${message.author.avatarURL}`)
        .setDescription(`**${message.author.username} 교수**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에서 교수직을 수여함.`)
    } else if (moneypersonrole && message.member.roles.has(moneypersonrole.id)) {
      var embed = new Discord.RichEmbed()
        .setColor(4620980)
        .setTitle(`${message.author.tag}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .setURL(`${message.author.avatarURL}`)
        .setDescription(`**${message.author.username} 이사장**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에 약 1조억을 기부하였으므로 그 의미에서 이사장직을 수여함.`)
    }
    message.channel.send({embed})
      break;
    case ';입학':
      if (!args[0]) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**${message.author.username} 예비학생**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에 가기 위해서는 다음 중 하나를 기준으로 입학해야 해요.  > ;입학 ***초등학생, 중학생, 고등학생, 교장, 이사장, 교수***`)
      } else {
        let setgetrole = message.guild.roles.find('name', `${args[1]}`)
        message.author.addRole(role).catch(error => {
          var embed = new Discord.RichEmbed()
            .setColor(4620980)
            .setTitle(`${message.author.tag}`)
            .setThumbnail(`${message.author.avatarURL}`)
            .setURL(`${message.author.avatarURL}`)
            .setDescription(`**${message.author.username} 예비학생**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에 가기 위해서는 다음 중 하나를 기준으로 입학해야 해요.  > ;입학 ***초등학생, 중학생, 고등학생, 교장, 이사장, 교수***`)
          message.channel.send({embed})
        })
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**${message.author.username} 학생**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에 입학을 축하합니다!`)
      }
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['학생증', '입학'],
  permLevel: 0
}

exports.help = {
  name: 'newnamu',
  description: 'Get avatar of user.',
  usage: 'newmanu'
}
