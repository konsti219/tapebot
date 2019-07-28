const commando = require('discord.js-commando');

module.exports = class ParrotCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'parrot',
      memberName: 'parrot',
      group: 'fun',
      description: 'What should the parrot say',
      examples: ['parrot <your message>'],
      args: [{
        key: 'text',
        prompt: 'What do you want to echo?',
        type: 'string',
        default: 'Joris stinkt'
      }],
      clientPermissions: ['MANAGE_MESSAGES']
    });
  }

  async run(msg, { text }) {
    msg.delete();
    msg.say(`<:parrot:589916784325427200> *schnatter* ${text} *schnatter schnatter*`);
  }
}