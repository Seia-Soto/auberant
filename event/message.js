const int = require('../int.json')
module.exports = message => {
  if (message.author.bot) return
  let client = message.client
  if (message.content.startsWith('세이아')) {
    // Secondary
    var responses = [
      '안녕? 세이아라고 해', '난 사쿠라 고등학원 2학년 E반 14번, 세이아 사카이자와(せいあ さかいざわ).',
      '난 세이아 사카이자와.', '여행을 떠나요..!', '만나서 반가워', '너 덕분에 힘이 났어..!', 'ㅠㅠ',
      '헉..?', '인사 고마워'
    ]
    if (message.content.includes('하잖') && message.content.includes('때문')) {
      if (message.content.includes('힘')) {
        var responses = [
          '힘들어?', '내가 ~~안~~도와줄게', '나 힘 약해서 못 도와줘', '미안. 유감이야~', '별빛팸 ㄱㅈㅇ', '그러니깐 말이야'
        ]
      } else if (message.content.includes('숙제')) {
        var responses = [
          '나중에 편하라고 하는거야', '빨리 끝내고 놀자', '숙제는 좋은 걸까?', '과연 그럴까?', '하나도 안 어려워', '정상!',
          '그냥 하지 말자', '답이 없네..', '숙제의 해를 구하시오', '숙제해야지'
        ]
      } else if (message.content.includes('사랑')) {
        var responses = [
          '친구 사이로 지내자', '난 그다지 아직 거기까지 안 왔어', '내가 어떻게 널 차 줬으면 해?', '꺼져', '정말로?',
          '난 친구가 더 좋아', '네가 이러는 거 싫어.', '거부할 수 있는 선택권은 있는거지?', 'ㅋㅎㅋㅎㅋㅎㅋㅎ', '..?!',
          '친구 사이로 지내면 안되?', '난 친구 사이가 더 좋아', '왜 그래...?', '넌 더 좋은 사람 만나 행복해야 해...'
        ]
      } else if (message.content.includes('여행')) {
        var responses = [
          '여행..', '여행 좋지', '여행 좋은데?', '정말로?', '진짜로?', '가는거야?', '정말로 가는 구나.. ', '사진 많이 찍어와야 해.'
        ]
      }
    }
    if (message.content.includes('도와')) {
      if (message.content.includes('제발')) {
        var responses = [
           '싫어', '내가 알기 싫어서', '그냥', '왜 그래', '혹시 나한테 관심있니', '데헷 안 알려줄건데', '내가 왜', '오늘 하루를 그냥 지금 마무리하자',
           '싫어요', '안되요', '하지 마세요', '프레타한테 물어봐', '카티노르한테 물어봐', 'Let한테 물어보지마.', '별빛팸.', '날 뭘로 보는거야',
           '그건 또 왜', '나 잘 틩겨', '잘 알아봐', '왜요', '좋은 사랑해', '겨울이한테 물어봐', '박제헌한테 물어봐', '별빛한테 물어봐'
        ]
      } else if (message.content.includes('그냥')) {
        var responses = [
           '내가 왜 너한테..?', '싫어요 안되요 하지마세요', '나도 몰라', '내가 어떻게 알아', '자 여기 관심', '지금 좀 바빠', '알려주기 싫어',
           '싫어요', '안되요', '하지 마세요', '프레타한테 물어봐', '카티노르한테 물어봐', 'Let한테 물어보지마.', '별빛팸.', '날 뭘로 보는거야',
           '그건 또 왜', '나 잘 틩겨', '잘 알아봐', '왜요', '좋은 사랑해', '겨울이한테 물어봐', '박제헌한테 물어봐', '별빛한테 물어봐'
        ]
      } else {
        var responses = [
           '싫어요', '안되요', '하지 마세요', '프레타한테 물어봐', '카티노르한테 물어봐', 'Let한테 물어보지마.', '별빛팸.', '날 뭘로 보는거야',
           '그건 또 왜', '나 잘 틩겨', '잘 알아봐', '왜요', '좋은 사랑해', '겨울이한테 물어봐', '박제헌한테 물어봐', '별빛한테 물어봐'
        ]
      }
    }
    message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`)
    return
  }
  if (!message.content.startsWith(int.prefix)) return

  let react = message.content.split(' ')[0].slice(int.prefix.length)
  let args = message.content.split(' ').slice(1)
  let perms = client.elevation(message)
  let rct

  if (client.reacts.has(react)) {
    rct = client.reacts.get(react)
  } else if (client.aliases.has(react)) {
    rct = client.reacts.get(client.aliases.get(react))
  }
  if (rct) {
    if (perms < rct.conf.permLevel) return
    rct.run(client, message, args, perms)
  }
}
