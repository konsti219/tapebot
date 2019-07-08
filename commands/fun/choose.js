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

  async run(msg, {
    method
  }) {
    var user;
    const commandoMembers = msg.member.guild.members; //Extract server data from message
    var filteredMembers;

    if (method == 'online') filteredMembers = commandoMembers.filter(m => m.presence.status === 'online'); // the super weird map but it's filtered first
    else if (method == 'all') filteredMembers = commandoMembers; //just the super weird map
    else {
      msg.reply('Please use **online** or **all** to define from what pool you want to select a user from!');
      return;
    }

    const membersArray = Array.from(filteredMembers); //Super weird map to 2d array

    var members = []; //easy to work with users array
    for (var i in membersArray) {
      members.push(membersArray[i][1].user); //weird 2d array to simple array
    }
    user = members[Math.floor(Math.random() * members.length)]; //randomly selecting user from array

    msg.say(`${user} was choosen from ${method} members!`);
  }
}