const { MessageEmbed } = require('discord.js');

module.exports = (client, message, args) => {
   const embed = new MessageEmbed()
  .setTitle("**Tienda**")
  .setColor("GREEN")
  .setDescription("[Click aqui!](https://inmortalcraft.tebex.io/)")
  .setFooter("InmortalCraft", "https://cdn.discordapp.com/icons/928518093733519460/510aa3f4f701ed3d5193b68990dc07be.png?size=2048")
  message.channel.send(embed)
}