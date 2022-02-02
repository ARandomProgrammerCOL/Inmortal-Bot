const { MessageEmbed } = require('discord.js')

module.exports = (client, message, args) => {
  if(message.member.roles.cache.has(process.env['adminRole'])) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    let uptimeE = new MessageEmbed()
      .setTitle("UPTIME")
      .setColor("GREEN")
      .setDescription(`\nDay(S) Online: ${days}\n\nHour(S) Online: ${hours}\n\nMinute(S) Online: ${minutes}\n\nSecond(S) Online: ${seconds}`)
      .setFooter(`Requested by: ${message.author.tag}`);
    message.channel.send(uptimeE);
  }
}