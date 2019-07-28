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

  async run(msg, { user }) {
    //Chat
    msg.say(`Pealing the tape of ${user}... slowly... *Beep Boop*`);

    //Loading array
    let mutedUsers = JSON.parse(fs.readFileSync('mutedUsers.json'));

    //Check if already muted
    let unmuted = false;
    for (let userId of mutedUsers) {
      if (userId == user.id) {
        mutedUsers.splice(i, 1);
        unmuted = true;
      }
    }
    if (!unmuted) msg.say('But what tape? *user not muted*');

    //Save
    fs.writeFileSync('mutedUsers.json', JSON.stringify(mutedUsers));
  }
}