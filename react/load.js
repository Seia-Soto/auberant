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
      description: `Loading.\n**5%** [#....................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**10%** [##...................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**15%** [###..................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**20%** [####.................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**25%** [#####................]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**30%** [######...............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**35%** [#######..............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**40%** [########.............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**45%** [#########............]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**50%** [##########...........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**55%** [###########..........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**60%** [############.........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**65%** [#############........]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**70%** [###############......]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**75%** [################.....]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**80%** [#################....]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**85%** [##################...]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**90%** [###################..]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**95%** [####################.]`
    }
    })
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**100%** [#####################]`
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
