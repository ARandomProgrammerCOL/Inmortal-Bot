const request = require('request')
const { MessageEmbed } = require('discord.js')

module.exports = (client, message, args) => {
  if(message.member.roles.cache.has(client.config['adminRole'])) {
    request({
    url: 'https://api.mcsrvstat.us/2/mc.inmortalcraft.ovh',
    json: true
  }, async (error, response, body) => {
    if (error) return console.log(error);

      const update = new Date(body.debug.cachetime * 1000).toLocaleString()
    message.channel.send(`Jugadores en línea:\n- ${(!body.players) ? 'Ninguno' : body.players.list.join('\n- ')}`)
      message.channel.send(`Última actualización • ${(body.debug) ? update: 'Error'}`)
  })
  }
}