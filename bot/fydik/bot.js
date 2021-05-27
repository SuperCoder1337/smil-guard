const Discord = require('discord.js');
const client = new Discord.Client();
let config = require('./config.json');
let token = config.token;

client.on("ready", () => {
  console.log(`Connection for Cmd and Discord Hi Bro ${client.user.tag}!`)
  console.log(`Create DiscordBot IIrn#4834!`)
})

client.on('message', msg => {
  if (msg.content === '#hi') {
    msg.reply('Шалом!');
  console.log(`Fydik Написал: Шалом!`)

  }
  if (msg.content === '#ban') {
      msg.reply('Укажите ник!');
  console.log(`Fydik Написал: Укажите Ник!`)

  }
  if (msg.content === '#kick') {
      msg.reply('Укажите ник!');
  console.log(`Fydik Написал: Укажите Ник!`)

  }
  if (msg.content === '#mute') {
      msg.reply('Укажите ник!');

  console.log(`Fydik Написал: Укажите Ник!`)

  }
  if (msg.content === '#author') {
      msg.reply(' Автор Бота: IIrn#4834! ');

  console.log(`Fydik Написал: Автор Бота: IIrn#4834! `)
  
  }
});

client.login(token);