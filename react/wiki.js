const translate = require('google-translate-api')
const wiki = require('wikijs')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
      if (!args[0]) {
        message.channel.send({embed: {
          color: 3447003,
          title: '위키',
          description: '미디어위키의 페이지를 쿼리합니다. Api 기본접속점은 위키백과이며 원할 경우 ``;위키 url:urlToQuery``와 같이 url 옵션을 추가하여 사용할 수 있습니다. url 옵션은 첫번째 인수에 속해야 합니다.'
        }})
      } else if (args[0].startsWith('url:')) {
        var urlToQuery = args[0].split(':')[1]
        var pageToQuery = args.slice(1).join(' ')
        if (urlToQuery.includes('http')) {
          if (urlToQuery.includes('https')) {
            var urlToQuery = urlToQuery.split('https://')[1]
          } else {
            var urlToQuery = urlToQuery.split('http://')[1]
          }
        }
        wiki({
          apiURL: 'http://' + urlToQuery + '/wiki/api.php',
          origin: null
        }).page(pageToQuery)
          .then(queryResult => {
            var queryResult = queryResult.substring(0, 2047)
            message.channel.send({embed: {
              color: 3447003,
              title: '위키',
              description: `${queryResult}`
            }})
          })
        return
      } else {
        var pageToQuery = args.slice(1).join(' ')
        wiki({
          apiURL: 'https://ko.wikipedia.org/w/api.php'
        }).page(pageToQuery)
          .then(queryResult => {
            var queryResult = queryResult.substring(0, 2047)
            message.channel.send({embed: {
              color: 3447003,
              title: '위키',
              description: `${queryResult}`
            }})
          })
        return
      }
        break;
      default:
        if (!args[0]) {
          message.channel.send({embed: {
            color: 3447003,
            title: 'wiki',
            description: `Query mediawiki's pages. Default api-point is wikipedia and if you want to specific the mediawiki's url, add url option like \`\`;wiki url:urlToQuery\`\`. You must specific url option for first argument.`
          }})
        } else if (args[0].startsWith('url:')) {
          var urlToQuery = args[0].split(':')[1]
          var pageToQuery = args.slice(1).join(' ')
          if (urlToQuery.includes('http')) {
            if (urlToQuery.includes('https')) {
              var urlToQuery = urlToQuery.split('https://')[1]
            } else {
              var urlToQuery = urlToQuery.split('http://')[1]
            }
          }
          wiki({
            apiURL: 'http://' + urlToQuery + '/wiki/api.php',
            origin: null
          }).page(pageToQuery)
            .then(queryResult => {
              var queryResult = queryResult.substring(0, 2047)
              message.channel.send({embed: {
                color: 3447003,
                title: 'wiki',
                description: `${queryResult}`
              }})
            })
          return
        } else {
          var pageToQuery = args.slice(1).join(' ')
          wiki().page(pageToQuery)
            .then(queryResult => {
              var queryResult = queryResult.substring(0, 2047)
              message.channel.send({embed: {
                color: 3447003,
                title: 'wiki',
                description: `${queryResult}`
              }})
            })
          return
        }
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['위키'],
  permLevel: 0
}

exports.help = {
  name: 'wiki',
  description: 'Query mediawiki documents.',
  usage: 'wiki'
}
