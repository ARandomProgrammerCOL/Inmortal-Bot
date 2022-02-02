const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
  
 console.log(`Iniciando como: ${client.user.tag}`);
  const channelId = '936621998816235620';
  const channel = client.channels.cache.get(channelId);
  const upembed = new MessageEmbed()
    .setTitle('Notificación del bot')
    .setColor('DARKER_GREY') //Color
    .setDescription('Encendido/reinicio exitoso');
  channel.send(upembed).catch();
  
}