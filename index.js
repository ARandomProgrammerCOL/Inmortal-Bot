//[like so.](https://example.com)

const Discord = require('discord.js');

const client = new Discord.Client(require('./commands/utils/options').clientOptions)
client.snipes = new Discord.Collection();
client.editsnipes = new Discord.Collection();
client.commands = new Discord.Collection();

const {readdirSync} = require('fs')

const keepAlive = require('./keepAlive.js')
require('dotenv').config();
client.config = process.env;

//Command Handler
for(const file of readdirSync('./commands/')) { 

  if(file.endsWith(".js")) { 

  let fileName = file.substring(0, file.length - 3); 

  let fileContents = require(`./commands/${file}`); 

  client.commands.set(fileName, fileContents);
  }
  else if(file.endsWith(".mjs")) {
    let fileName = file.substring(0, file.length - 4); 

  let fileContents = require(`./commands/${file}`); 

  client.commands.set(fileName, fileContents);
  }
}


//Event handler
for(const file of readdirSync('./events/')) { 

  if(file.endsWith(".js")){

  let fileName = file.substring(0, file.length - 3); 

  let fileContents = require(`./events/${file}`); 

  client.on(fileName, fileContents.bind(null, client)); 
		
  delete require.cache[require.resolve(`./events/${file}`)]; 
  }
}
client.login(client.config['token'])