const Discord = require('discord.js')
const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        var embed = new Discord.RichEmbed()
          .setTitle('Auberant를 사용 중에 무슨 문제가 있나요?')
          .setAuthor('Auberant', `${int.avatar}`)
          /*
           * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
           */
          .setColor(4620980)
          .setDescription(`안녕하세요? Auberant를 사용해주셔서 감사합니다!\n${client.guilds.size}개의 서버들이 Auberant를 채택했으며 현재 200개 이상의 커밋을 기록했답니다!`)
          //.setFooter('FooterText', 'Image_URL')
          .setImage('https://cdn.discordapp.com/attachments/383944646046253056/416347036758048772/let_art_is_new_Artwork.png')
          .setThumbnail(`${int.avatar}`)
          /*
           * Takes a Date object, defaults to current date.
           */
          //.setTimestamp()
          .setURL('https://discord.gg/dtaEjNA')
          .addField('노트',
            '현재 저희 서버는 설정 중에 있습니다. 웹페이지가 정상적으로 작동하지 않을 수 있으니 주의해주세요!')
          /*
           * Inline fields may not display as inline if the thumbnail and/or image is too big.
           */
          .addField(`Auberant ${int.version.substring(0, 5)} 배포판 (${int.date})`, `Artwork-if ${int.version} 빌드 ${int.build}\nEqualise와 Tree가 2명의 기여자와 함께 개발했습니다!`, true)
          /*
           * Blank field, useful to create some space.
           */
          .addBlankField(true)
          .addField('반응 (명령)',
            `사용하면서 더 자세한 설명을 볼 수 있습니다. 접두사는 **;** (세미콜론)입니다.\n
**도움말** 문서
**프로필** 프로필사진 출력
**노트** 메모장 열기
**질의** Auberant 반응속도 얻기
**번역** 문자열 번역
**후이즈** ICANN Whois에서 도메인 정보 얻기
**텍스트** ASCii art 출력`, true);

          message.channel.send({embed})
        break;
      default:
         var embed = new Discord.RichEmbed()
          .setTitle('Is there a problem using Auberant?')
          .setAuthor('Auberant', `${int.avatar}`)
          /*
           * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
           */
          .setColor(4620980)
          .setDescription(`Hi, there? Thank you for using Auberant!\n${client.guilds.size} servers have adopted Auberant. And recorded over 200 commits!`)
          //.setFooter('FooterText', 'Image_URL')
          .setImage('https://cdn.discordapp.com/attachments/383944646046253056/416347036758048772/let_art_is_new_Artwork.png')
          .setThumbnail(`${int.avatar}`)
          /*
           * Takes a Date object, defaults to current date.
           */
          //.setTimestamp()
          .setURL('https://discord.gg/dtaEjNA')
          .addField('Note',
            'Our server is configuring some stuffs. The website may not work.')
          /*
           * Inline fields may not display as inline if the thumbnail and/or image is too big.
           */
          .addField(`Auberant ${int.version.substring(0, 5)} distributions (${int.date})', 'Artwork-if ${int.version} build ${int.build}\nDeveloped by Equalise, Tree with 2 contributors!`, true)
          /*
           * Blank field, useful to create some space.
           */
          .addBlankField(true)
          .addField('Reacts (commands)',
            `You can get additional help with using commands. And the prefix is **;**\n
**help** documentation
**avatar** get your avatar
**note** open notepad
**ping** get Auberant's respones-time
**translate** translate string
**whois** load domain information from ICANN Whois
**text** out ASCii art`, true);

          message.channel.send({embed})
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['도움말'],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'Get documentation.',
  usage: 'help'
}
