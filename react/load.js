exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'load',
    description: 'Reading some files...'
  }
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading\n [.....................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n [#....................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n [##...................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n [###..................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n [####.................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n [#####................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n [######...............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n [#######..............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n [########.............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n [#########............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n [##########...........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n [###########..........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n [############.........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n [#############........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n [###############......]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n [################.....]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n [#################....]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n [##################...]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n [###################..]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n [####################.]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n [#####################]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Done!`
    }
    })
  })
  .catch(console.error)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['loading', '로딩', '로드'],
  permLevel: 0
}

exports.help = {
  name: 'load',
  description: 'Just loading. lmao',
  usage: 'load'
}
