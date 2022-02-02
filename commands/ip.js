
const request = require('request')
const {MessageEmbed} = require('discord.js')
//const reqOpt = require('../utils/requestOptions')
const reqOpt = require('./utils/options').requestOptions;

module.exports = (client, message, args) => {
  request({
    url: 'https://api.mcsrvstat.us/2/mc.inmortalcraft.ovh',
    json: true
  }, async (error, response, body) => {
    if (error) return console.log(error);

    const embed = new MessageEmbed()
    .setTitle('Inmortal Craft')
    .addField(
      'Información',
      `**En línea:** ${(!body.players) ? '0' : body.players.online}/${(!body.players) ? '0' : body.players.max}\n
      **IP:** mc.inmortalcraft.ovh\n
      **Versión:** ${(!body.version) ? reqOpt.version.false : reqOpt.version.true}\n`,
      true
    )
    .addField('Estado', `${(body.online) ? reqOpt.status.true : reqOpt.status.false}`, true)
    .setThumbnail(message.guild.iconURL())
    .setFooter(`Última actualización`)
    .setTimestamp()
    .setColor("850F08")
  message.channel.send(embed)
  })
}