const commando = require('discord.js-commando');
const fs = require('fs');

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
    msg.say(`Taping the mouth of ${user} *Beep Boop*`);

    //Loading array
    var data = fs.readFileSync('mutedUsers.json');
    var mutedUsers = JSON.parse(data);

    //Check if already muted
    for (var i in mutedUsers) {
      if (mutedUsers[i] == user.id) {
        msg.say('Or just adding more tape... *user already muted*');
        return;
      }
    }

    //Save
    mutedUsers.push(user.id);
    data = JSON.stringify(mutedUsers);
    fs.writeFile('mutedUsers.json', data, (e) => {});
  }
}