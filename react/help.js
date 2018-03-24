exports.run = (client, message, int, args, arg, perms, requestLanguage) => {
  // messageDescriptions
  let messageTitle = `Help`
  let messageDescription = `**Thank you for using Auberant!**\n
Auberant is the [open-source project](https://github.com/artwork-if/auberant) of Artwork-IF.
Let made Auberant with LuminescentLight and there are 2 contributors.\n
Open-distribution: ${int.version}-${int.build} build (${int.date})
Here you are! If you need [Auberant for your server](https://discordapp.com/api/oauth2/authorize?client_id=410170772599078913&permissions=8&scope=bot) or [link of support server](https://discord.gg/YzBZNQq)!\n
**1. Ascii** - send ascii artwork
**2. Help** - send Auberant's help documentation
**3. Note** - write and save it to Auberant
**4. Ping** - get api respones delay time
**5. Say** - Auberant will respones with your argument
**Other commands are on maintences! Wait for moments. You can execute each commands to get more informations.**
`
  let errorTitle = `Error`
  switch (requestLanguage) {
    case `ko`:
      messageTitle = `도움말`
      messageDescription = `**Auberant를 사용해주셔서 감사합니다!**\n
Auberant는 Artwork-IF의 [오픈소스 프로젝트](https://github.com/artwork-if/auberant)입니다.
Let은 Auberant를 LuminescentLight 외 2명의 기여자와 함께 만들었습니다.\n
커뮤니티 배포버전: ${int.version}-${int.build} 빌드 (${int.date})
만약 [당신의 서버를 위한 Auberant](https://discordapp.com/api/oauth2/authorize?client_id=410170772599078913&permissions=8&scope=bot)가 필요하시거나 [지원 서버의 주소](https://discord.gg/YzBZNQq)가 필요하신가요?\n
**1. 아스키** - 아스키 삽화를 출력합니다
**2. 도움말** - Auberant의 도움말을 출력합니다
**3. 노트** - 작성 후 Auberant에 저장합니다
**4. 질의** - API 응답시간을 측정합니다
**5. 말하기** - Auberant가 당신의 인수와 함께 응답할 것입니다
**다른 명령어는 현재 수리 중에 있습니다. 각 명령어를 실행함으로서 더욱 자세한 정보를 얻을 수 있습니다.**
`
      errorTitle = `오류`
      break;
    case 'zh-chs':
      messageTitle = `提示`
      messageDescription = `**谢谢使用Auberant!**\n
Auberant是 Artwork-IF的[开放源代码 事业](https://github.com/artwork-if/auberant)。`
      break;
  }
  message.channel.send({embed: {
    color: 4620980,
    title: `${messageTitle}`,
    description: `${messageDescription}`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`도움말`, '提示'],
  permLevel: 0,
  name: `help`
}
