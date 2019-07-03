const commando = require('discord.js-commando');
const fs = require('fs');
require('dotenv').config();

//Create Client
const client = new commando.Client({
  commandPrefix: '!',
  owner: '445226810498744321',
  disableEveryone: true
});

client.login(process.env.LOGIN);

client.registry
  // Registers custom command groups (Directory/internal name; Ui name)
  .registerGroup('moderation', 'Moderation Commands')
  .registerGroup('random', 'Random Commands')
  .registerGroup('fun', 'Fun Commands')

  .registerDefaults()

  .registerCommandsIn(__dirname + '/commands');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Ready to tape your ass');
});

//Mute
client.on('message', msg => {
  var data = fs.readFileSync('mutedUsers.json');
  var mutedUsers = JSON.parse(data);
  for (var i in mutedUsers) {
    if (mutedUsers[i] == msg.author.id) msg.delete();
  }
});