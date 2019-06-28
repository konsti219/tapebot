const commando = require('discord.js-commando');
const fs = require("fs");
var mutedUsers, content;

module.exports = class EchoCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'mute',
      memberName: 'mute',
      group: 'moderation',
      description: 'Mute somebody',
      examples: ['mute @bad_user'],
      args: [{
        key: 'user',
        prompt: 'who to mute',
        type: 'user'
      }],
      aliases: ['tape'],
      userPermissions: ['MANAGE_MESSAGES'],
      clientPermissions: ['ADMINISTRATOR']
    });
  }

  async run(msg, {
    user
  }) {
    //Chat
    msg.say(`Taping the mouth of ${user} *Beep Boop*`)

    //Saving
    content = fs.readFileSync("mutedUsers.json");
    mutedUsers = JSON.parse(content);

    mutedUsers.push(user.id);
    content = JSON.stringify(mutedUsers);
    fs.writeFile("mutedUsers.json", content, function(e) {});
  }
}