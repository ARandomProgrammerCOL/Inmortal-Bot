const { MessageEmbed } = require('discord.js')

module.exports = (client, message, args) => {
  if(message.member.roles.cache.has(process.env['adminRole'])) {
       let ping = Math.round(client.ws.ping);
    let pingC = new Date().getTime() - message.createdTimestamp
    let shardPing = message.guild.shard.ping
    const texto = `Discord.js API Latency: ${ping}ms\nThis Client Latency: ${pingC}ms`//\nShard Latency: ${shardPing}ms`

    const embed = new MessageEmbed()
      .setTitle('Pong :ping_pong:')
      .setFooter(`Pedido por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(texto)
      .setColor('GREEN')

    message.channel.send(embed)
  }
}