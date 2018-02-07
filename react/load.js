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
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**10%** [##...................]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**15%** [###..................]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**20%** [####.................]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**25%** [#####................]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**30%** [######...............]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**35%** [#######..............]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**40%** [########.............]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**45%** [#########............]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**50%** [##########...........]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**55%** [###########..........]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**60%** [############.........]`
    }
    })
  })
  .then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**65%** [#############........]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**70%** [###############......]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**75%** [################.....]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**80%** [#################....]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**85%** [##################...]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading...\n**90%** [###################..]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading.\n**95%** [####################.]`
    }
    })
  }).then((load) => {
    load.edit({embed: {
      color: 3447003,
      title: 'load',
      description: `Loading..\n**100%** [#####################]`
    }
    })
  }).then((load) => {
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
