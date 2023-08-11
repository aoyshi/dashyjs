require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');

/** Function to fetch a random insult from evilinsult.com */
const getRandomInsult = async () => {
  const response = await axios.get(
    'https://evilinsult.com/generate_insult.php?lang=en&type=json'
  );
  return response.data.insult;
};

/** Connect to Discord with the right privileges for the bot */
const client = new Discord.Client({
  intents: [
    Discord.IntentsBitField.Flags.Guilds,
    Discord.IntentsBitField.Flags.GuildMessages,
    Discord.IntentsBitField.Flags.MessageContent,
    Discord.IntentsBitField.Flags.GuildMembers,
  ],
});

/** Notify when bot is ready */
client.on('ready', () => {
  console.log(`${client.user.tag} is ready!`);
});

/** When any user types a new message and it is 'roastme', reply with insult */
client.on('messageCreate', async (msg) => {
  if (msg.content === 'roastme') {
    const insult =
      (await getRandomInsult()) ||
      `Network error fetching insult from remote API: you're so terrible, even a program was lost for words`;
    msg.reply(insult);
  }
});

/** Start the bot with the privilege token */
client.login(process.env.TOKEN);

/**
 * In: https://discord.com/developers/applications
 * Under Bot tab
 * ALLOW: Privilege Gateway Intents > SERVER MEMBERS INTENT
 * ALLOW: Privilege Gateway Intents > MESSAGE CONTENT INTENT
 *
 * Under OAuth2 > URL Generator
 * CHOOSE: bot
 * CHOOSE: Read Messages/View Channels, Send Messages, Mention Everyone
 */
