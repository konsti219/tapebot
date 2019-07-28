const commando = require('discord.js-commando');
const fs = require('fs');
const express = require('express');
const app = express();

app.listen(process.env.PORT); //listener
app.use(express.static('public')); //webpage

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


//prevent from sleeping
setInterval(() => require('https').get('https://tapebot.glitch.me', r => {}), 240000);

/*
//prevent from sleeping
setInterval(() => {
  https.get('https://tapebot.glitch.me', resp => {
    resp.on('data', chunk => {});
    resp.on('end', () => {});
  }).on("error", err => {console.log("Error: " + err.message);});
}, 240 * 1000);*/