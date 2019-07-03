const commando = require('discord.js-commando');

module.exports = class EchoCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'choose',
      memberName: 'choose',
      group: 'fun',
      description: 'Select a random user',
      examples: ['choose all', 'choose online'],
      args: [{
        key: 'method',
        prompt: 'Who to chose?',
        type: 'string',
        default: 'online'
      }]
    });
  }

  async run(msg, {
    method
  }) {
    user = 'test';
    msg.say(`${user} was choosen from ${method} members!`);
  }
}