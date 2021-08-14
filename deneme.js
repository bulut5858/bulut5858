const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Açıldım Lan Pezevenk!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'sa') {
		await interaction.reply('as.');
 {

	// ...
});

client.login(ODc2MTA2NDcyMjQ3OTM1MDY2.YRfPvA.snfkhdTmAPottRQd-KjI6cxbDok);
