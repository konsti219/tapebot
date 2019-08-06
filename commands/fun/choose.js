const commando = require('discord.js-commando');

module.exports = class ChooseCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'choose',
      memberName: 'choose',
      group: 'fun',
      description: 'Select a random user',
      examples: ['choose all', 'choose online'],
      args: [{
        key: 'method',
        prompt: 'What pool to choose from (online/all)?',
        type: 'string',
        default: 'online'
      }]
    });
  }

  async run(msg, { method }) {
    const commandoMembers = msg.guild.members; // extract server data from message

    let filteredMembers;
    if (method == 'online') filteredMembers = commandoMembers.filter(m => m.presence.status === 'online');
    else if (method == 'all') filteredMembers = commandoMembers; // just the super weird map
    else {
      msg.reply('Please use **online** or **all** to define from what pool you want to select a user from!');
      return;
    }
    const membersArray = Array.from(filteredMembers);

    let members = [];
    for (let i in membersArray) {
      members.push(membersArray[i][1].user);
    }

    let user = members[Math.floor(Math.random() * members.length)]; // randomly selecting user from array

    msg.say(`${user} was choosen from ${method} members!`);
  }
}