const OS = require('os');
const { MessageEmbed } = require('discord.js')

module.exports = (client, message, args) => {
  if(message.member.roles.cache.has(process.env['adminRole'])){
    const maxMemory = OS.totalmem();

    function getMemoryUsage() {
      const free = OS.freemem();

      return {
        max: memory(maxMemory),
        free: memory(free),
        used: memory(maxMemory - free),
        usedByProcess: memory(process.memoryUsage().rss)
      }
    }

    function memory(bytes = 0) {
      const gigaBytes = bytes / 1024 ** 3;

      if (gigaBytes > 1) {
        return `${gigaBytes.toFixed(1)} GB`;
      }

      const megaBytes = bytes / 1024 ** 2;
      if (megaBytes < 10) return `${megaBytes.toFixed(2)} MB`;

      if (megaBytes < 100) return `${megaBytes.toFixed(1)} MB`;

      return `${Math.floor(megaBytes)} MB`;
    }

    let memoria = getMemoryUsage();

    let embed = new MessageEmbed()
      .setTitle('General Console Memory')
      .addField('Max Memory', memoria.max)
      .addField('Free Memory', memoria.free)
      .addField('Memory used by the bot', memoria.usedByProcess)

    message.channel.send({ embed })
    }
}