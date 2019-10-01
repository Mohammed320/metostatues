const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
     status: 'dnd',
  game: { 
     type: 0,
     name: 'Abo 7med🖤',
     url:'https://twitch.tv/iimetoda',
     details: `Silence Is The Most Powerful Scream`,
     state: 'آلْحَيَآةُ قَضِيَّةٌ بَآئِسَةٌ قَرَّرْتُ أَنْ أَقْضَيٓهَآ مُحَآوِلَاً فِهْمَهَآ', 
    application_id: '625803435496833046', 
        smallImageKey: 'sad',
        smallImageText: 'why',
        LargeImageKey: 'happy',
        LargeImageText: 'dont leave me', 
        instance:true, 
   }
    });
});




client.login(process.env.METO_DA)
