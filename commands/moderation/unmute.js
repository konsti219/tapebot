const commando = require('discord.js-commando');
const fs = require('fs');

module.exports = class EchoCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'unmute',
      memberName: 'unmute',
      group: 'moderation',
      description: 'Unmute somebody',
      examples: ['unmute @not_more_so_bad_user'],
      args: [{
        key: 'user',
        prompt: 'who to mute',
        type: 'user'
      }],
      aliases: ['untape', 'peal', 'detape'],
      userPermissions: ['MANAGE_MESSAGES'],
      clientPermissions: ['ADMINISTRATOR']
    });
  }

  async run(msg, {
    user
  }) {
    //Chat
    msg.say(`Pealing the tape of ${user}... slowly... *Beep Boop*`);

    //Loading array
    var data = fs.readFileSync('mutedUsers.json');
    var mutedUsers = JSON.parse(data);

    //Check if already muted
    var unmuted = false;
    for (var i in mutedUsers) {
      if (mutedUsers[i] == user.id) {
        mutedUsers.splice(i, 1);
        unmuted = true;
      }
    }
    if (!unmuted) msg.say('But what tape? *user not muted*');

    //Save
    data = JSON.stringify(mutedUsers);
    fs.writeFile('mutedUsers.json', data, (e) => {});
  }
}