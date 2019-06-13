const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Model Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Model Shop ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Model Shop |Prefix:m!`,"https://www.twitch.tv/idk");/
client.user.setStatus("idle")
 
});
 
 
 client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()//DIAMONDCODES
  .setColor("#8650a7")//DIAMONDCODES
  .addField("** ✅ Servers: **" , client.guilds.size)//DIAMONDCODES
  .addField("** ✅ Users: **" , client.users.size)//DIAMONDCODES
  .addField("** ✅ Channels: **" , client.channels.size)//DIAMONDCODES
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)//DIAMONDCODES
    .setTimestamp()//DIAMONDCODES
  message.channel.sendEmbed(embed);//DIAMONDCODES
    }
});
 
 
client.login('token');
