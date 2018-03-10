const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  var toCalculate = args.slice(0).join(' ').replace( /(^\s*)|(\s*$)/g, '')
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        if (toCalculate == undefined && isNaN(toCalculate) == true) {
          message.channel.send({embed: {
            color: 4620980,
            title: '연산',
            description: '주어진 수를 계산합니다. 인수는 숫자로 이루어진 계산할 공식입니다.\n\n다음과 같이 사용할 수 있습니다.\n`;연산 5*25`'
          }})
          return
        }
        if (toCalculate.includes('+')) {
          var firstInt = toCalculate.split('+')[0]
          var secondInt = toCalculate.split('+')[1]
          var calculateResult = firstInt + secondInt
        } else if (toCalculate.includes('-')) {
          var firstInt = toCalculate.split('/')[0]
          var secondInt = toCalculate.split('/')[1]
          var calculateResult = firstInt - secondInt
        } else if (toCalculate.includes('/')) {
          var firstInt = toCalculate.split('/')[0]
          var secondInt = toCalculate.split('/')[1]
          var calculateResult = firstInt / secondInt
        } else if (toCalculate.includes('*')) {
          var firstInt = toCalculate.split('*')[0]
          var secondInt = toCalculate.split('*')[1]
          var calculateResult = firstInt / secondInt
        }

        message.channel.send({embed: {
          color: 4620980,
          title: '연산',
          description: `**__${toCalculate}__에 대한 결과값:** ${calculateResult}`
        }})
        break;
      default:
        if (toCalculate == undefined && isNaN(toCalculate) == true) {
          message.channel.send({embed: {
            color: 4620980,
            title: 'calculate',
            description: '주어진 수를 계산합니다. 인수는 숫자로 이루어진 계산할 공식입니다.\n\n다음과 같이 사용할 수 있습니다.\n`;연산 5*25`'
          }})
          return
        }
        if (toCalculate.includes('+')) {
          var firstInt = toCalculate.split('+')[0]
          var secondInt = toCalculate.split('+')[1]
          var calculateResult = firstInt + secondInt
        } else if (toCalculate.includes('-')) {
          var firstInt = toCalculate.split('/')[0]
          var secondInt = toCalculate.split('/')[1]
          var calculateResult = firstInt - secondInt
        } else if (toCalculate.includes('/')) {
          var firstInt = toCalculate.split('/')[0]
          var secondInt = toCalculate.split('/')[1]
          var calculateResult = firstInt / secondInt
        } else if (toCalculate.includes('*')) {
          var firstInt = toCalculate.split('*')[0]
          var secondInt = toCalculate.split('*')[1]
          var calculateResult = firstInt / secondInt
        }

        message.channel.send({embed: {
          color: 4620980,
          title: 'calculate',
          description: `**__${toCalculate}__에 대한 결과값:** ${calculateResult}`
        }})
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['연산'],
  permLevel: 0
}

exports.help = {
  name: 'calculate',
  description: 'Calculations',
  usage: 'calculate <code>'
}
