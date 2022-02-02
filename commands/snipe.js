const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = (client, message, args) => {
  const snipes = client.snipes.get(message.channel.id);

    if (!snipes) return message.channel.send(new MessageEmbed().setColor('BLACK').addField('No hubo mensajes borrados en este canal!', 'ㅤ'))

    const snipe = +args[0] - 1 || 0;
    const target = snipes[snipe]

    if (!target) return message.channel.send(`Solo hay ${snipes.length} mensajes!`)

    const { msg, time, image } = target;
    if (!msg, time, image) return;

    message.channel.send(
      new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
        .addField('Content', msg.content)
        .setImage(image)
        .setFooter(`${moment(time).fromNow()}`)
        .setColor('BLACK')
    )
}