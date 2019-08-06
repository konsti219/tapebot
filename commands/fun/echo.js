const commando = require('discord.js-commando');

module.exports = class EchoCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'echo',
      memberName: 'echo',
      group: 'fun',
      description: 'Echo back what the user after the command',
      examples: ['echo <your message>'],
      args: [{
        key: 'text',
        prompt: 'What do you want to echo?',
        type: 'string'
      }],
      aliases: ['copycat', 'repeat', 'say'],
      clientPermissions: ['MANAGE_MESSAGES']
    });
  }

  async run(msg, { text }) {
    msg.delete(); // ? Doesn't work?
    msg.say(`As ${msg.author.username} said: ${text}`);
  }
}