module.exports = (client, oldMessage, newMessage) => {
  let editsnipes = client.editsnipes.get(oldMessage.channel.id) || [];

  if (editsnipes.length > 5) editsnipes = editsnipes.slice(0, 4);

  editsnipes.unshift({
    msg: oldMessage,
    image: oldMessage.attachments.first() || null,
    time: Date.now()
  });

  client.editsnipes.set(oldMessage.channel.id, editsnipes);
}