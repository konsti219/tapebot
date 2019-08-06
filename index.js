const commando = require('discord.js-commando');
const fs = require('fs');
const express = require('express');
const app = express();

app.listen(process.env.PORT); // listener
app.use(express.static('public')); // webpage

// create client
const client = new commando.Client({
  commandPrefix: '!',
  owner: '445226810498744321',
  disableEveryone: true
});

client.login(process.env.LOGIN);

client.registry
  // registers custom command groups (Directory/internal name; Ui name)
  .registerGroup('moderation', 'Moderation Commands')
  .registerGroup('fun', 'Fun Commands')

  .registerDefaults()

  .registerCommandsIn(__dirname + '/commands');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Ready to tape your ass');
});

// mute
// ? use DB instead?
client.on('message', msg => {
  let mutedUsers = JSON.parse(fs.readFileSync('mutedUsers.json'));
  for (let user of mutedUsers) {
    if (user == msg.author.id) msg.delete();
  }
});


// ! prevent from sleeping
setInterval(() => require('https').get('https://tapebot.glitch.me', r => {}), 240000);
