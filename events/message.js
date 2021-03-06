module.exports = (client, message) => {
  const prefix = "-"
  if(!message.content.startsWith(prefix)) return; 
  if(message.author.bot) return;

  // Definiendo los argumentos y comandos.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()

  // Manejando los eventos.
  let cmd = client.commands.get(command); // Obtiene el comando de la colección client.commandos
  if(!cmd) return; // Si no hay comandos no ejecute nada.
  
  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
  cmd(client, message, args);
}