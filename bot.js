const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function(message) {
  let prefix = '!'
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0].replace(prefix, '')
  let args = message.content.split(" ").slice(1)
  
  if (command == 'status') {
    client.user.setActivity(args.join(' '), { type: 'PLAYING' });
  }
  });

client.login(process.env.BOT_TOKEN);
