const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Abo 7med🖤',
     details: `I'm Fine💔`,
     state: 'لَقَدْ تَعِبْتُ مِنْ مُقَآوَمَةِ هَذَآ آلْعَآلَمِ بِمَآ يَكْفِيٓ', 
    application_id: '625803435496833046',
        url: 'https://m.twitch.tv/iimetoda/',
        smallImageKey: 'sad',
        smallImageText: 'why',
        LargeImageKey: 'happy',
        LargeImageText: 'dont leave me', 
        instance:false, 
   }
    });
});




client.login(process.env.METO_DA)
