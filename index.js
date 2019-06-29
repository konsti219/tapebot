const commando = require('discord.js-commando');
const fs = require("fs");
const client = new commando.Client({
  commandPrefix: '!',
  owner: '445226810498744321',
  disableEveryone: true
});
//445226810498744321
var content, mutedUsers, i;



client.login('NTkwMDY0NDg1NTIwMTEzNjY3.XQc2RQ.-1zcvs4jyCNKRylYxKbBFp5OklE');


client.registry
  // Registers custom command groups (Directory/internal name; Ui name)
  .registerGroup('moderation', 'Moderation Commands')
  .registerGroup('random', 'Random Commands')
  .registerGroup('fun', 'Fun Commands')

  // Registers all built-in groups, commands, and argument types
  .registerDefaults()

  // Registers all commands in the ./commands/ directory
  .registerCommandsIn(__dirname + '/commands');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Ready to tape your ass');
});

//Mute
client.on('message', msg => {
  content = fs.readFileSync("mutedUsers.json");
  mutedUsers = JSON.parse(content);

  for (i in mutedUsers) {
    if (mutedUsers[i] == msg.author.id) msg.delete();
  }
});





/*
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
    msg.channel.send('pong2');
  }
});*/