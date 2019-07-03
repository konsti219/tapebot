Tapebot - A simple discord bot
==============================

About
-----
This bot uses discord.js-commando to make building commands easier. The available commands are:
- !dice
- !echo
- !parrot
- !mute
- !unmute
- !kick

For further information use the !help command when the bot is running or check the [command].js file in commands/[group]/ .
The muted users are saved in mutedUsers.json and is loaded each time a message is sent.
Also there is already a Procfile for using this with Heroku.

Setup
-----
1. Make your own bot account(app) and copy the api key. Goto <https://discordapp.com/developers/applications/> for that.
2. Rename .env_sample to .env and put your key into it
3. Add the bot to your server using this panel: <https://discordapi.com/permissions.html>. You can get the Client ID from the general page of your app page.

Starting the bot
----------------
You can use these bash commands to start the bot:
- node .
- node index.js
- npm start
