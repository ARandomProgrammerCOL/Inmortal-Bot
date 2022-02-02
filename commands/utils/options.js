const {Intents} = require('discord.js')

const options = {
  requestOptions : {
    status: {
      "true": "Online :skull:",
      "false": "Offline :imp:"
    },
    version: {
      "true": "1.17.1",
      "false": "Offline :imp:"
    }
  }, clientOptions: {
    partials: ['MESSAGE', 'REACTION'],
    intents: [    
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
  }
}

module.exports = options