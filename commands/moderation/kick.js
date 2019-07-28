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
    msg.mentions.members.first().kick('tape');
    msg.say(`Shoooting tape at ${user} *Beep*. ${user} runs away! *kicked*`);
  }
}