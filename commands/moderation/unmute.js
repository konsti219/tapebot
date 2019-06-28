const commando = require('discord.js-commando');
const fs = require("fs");
var mutedUsers, content, i;

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
    msg.say(`Pealing the tape of ${user}... slowly... *Beep Boop*`)

    //Saving
    content = fs.readFileSync("mutedUsers.json");
    mutedUsers = JSON.parse(content);

    for (i in mutedUsers) {
      if (mutedUsers[i] == user.id) mutedUsers.splice(i, 1);
    }
    content = JSON.stringify(mutedUsers);
    fs.writeFile("mutedUsers.json", content, function(e) {});
  }
}