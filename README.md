Tapebot - A simple discord bot
==============================

About
-----
This bot uses discord.js-commando to make building commands easier. The available commands are:
- !dice [fun]
- !echo [fun]
- !parrot [fun]
- !choose [fun]
- !mute [moderation]
- !unmute [moderation]
- !kick [moderation]
- !help [utility]
- !ping [utility]

For further information on each command use the !help [command] command when the bot is running or check the [command].js file in commands/[group]/ .
The muted users are saved in mutedUsers.json and is loaded each time a message is sent.
Also there is already a Procfile for using this with Heroku.

Setup
-----
1. Make your own bot account(app) and copy the api key. Goto <https://discordapp.com/developers/applications/> for that.
2. Rename .env_sample to .env and put your key into it. If you want to use this with heroku just configure a envoirment variable LOGIN with your key.
3. Add the bot to your server using this panel: <https://discordapi.com/permissions.html>. You can get the Client ID from the general page of your app page.

Starting the bot
----------------
You can use these bash commands to start the bot:
- node .
- node index.js
- npm start
