const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
	console.log(`Bot running and logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
	if (msg.content === 'ping' || msg.content === 'Ping') {
		msg.reply('Pong!');
	}
	if (msg.content === 'picture') {
		// Send the user's avatar URL
		msg.reply(msg.author.displayAvatarURL());
	}
	if (msg.content === 'image') {
		const attachment = new Discord.MessageAttachment(
			'./img/gunter_logo.jpg',
		);
		msg.channel.send(attachment);
	}
});

bot.login(process.env.DISCORD_TOKEN);
