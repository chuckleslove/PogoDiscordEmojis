# PogoDiscordEmojis

This is a basic emoji class to use for Discord bots that are related to Pokemon Go.

Join and add your bot to two different servers for full access to all emojis:

https://discord.gg/zqVCfPy - WEATHER, TEAMS, GYMS, TYPES

https://discord.gg/cw8BzYn - Legendary boss emojis

# Use

const Emojis = require('./Emojis.js');
const emojis = new Emojis.DiscordEmojis();
bot.on('ready', () => {
    emojis.load(bot);
})

You can then access all emojis as members of the emojis object.  Each emoji has both an actual emoji version for using as reactions or a string version for inserting inside of a text statement.

Example: emojis.valor or emojis.valorReact

The former would be used for inserting a Valor Team Emoji inside a text string the latter for reacting to a post.
