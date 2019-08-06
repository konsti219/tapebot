const commando = require('discord.js-commando');

module.exports = class KickCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'kick',
      memberName: 'kick',
      group: 'moderation',
      description: 'Kick somebody',
      examples: ['kick @bad_user'],
      args: [{
        key: 'user',
        prompt: 'who to kick?',
        type: 'user'
      }],
      userPermissions: ['KICK_MEMBERS'],
      clientPermissions: ['ADMINISTRATOR']
    });
  }

  async run(msg, { user }) {
    // chat
    msg.mentions.members.first().kick('tape');
    msg.say(`Shoooting tape at ${user} *Beep*. ${user} runs away! *kicked*`);

    // * making sure user is unmuted
    // loading array + removing user + saving
    let mutedUsers = JSON.parse(fs.readFileSync('mutedUsers.json'));
    for (let userId of mutedUsers) {
      if (userId == user.id) {
        mutedUsers.splice(i, 1);
      }
    }
    fs.writeFileSync('mutedUsers.json', JSON.stringify(mutedUsers));
  }
}