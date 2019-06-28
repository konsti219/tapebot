const commando = require('discord.js-commando');

module.exports = class DiceCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'dice',
      memberName: 'dice',
      group: 'random',
      description: 'Rolls a die',
      examples: ['dice 10'],
      args: [{
        key: 'faces',
        prompt: 'How many faces should your dice have?',
        type: 'integer',
        default: 6
      }],
      aliases: ['roll'],
    });
  }

  async run(msg, {
    faces
  }) {
    var roll = Math.floor(Math.random() * faces) + 1;
    msg.say(`With your ${faces} sided dice you rolled a ${roll}!`);
  }
}