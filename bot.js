const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require("fs");

const prefix = "m!";

const adminprefix = "m!"; 

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
client.user.setGame(`Model Shop |Prefix:m!`,"https://www.twitch.tv/idk");
client.user.setStatus("idle")
 
});
 
var guilds = {};
client.on('message',async message => {
 var prefix2 = 'm!';//البرفكس
  if(message.content.startsWith(prefix2 + "تقديم")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "submissions");
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب عمرك  الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب ما الاشياء التي لديك لبيعها... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**عمره**]:
${boi}
 
[**الاشياء التي يبيعها**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});


client.on("message", msg => {
    if(msg.author.bot) return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
    if(msg.channel.type === 'dm') return;
  let prefix = 'm!'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}قبول`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
      let ac = msg.guild.channels.find(`name`,"✽-القبول-الرفض");
      if(!ac) return msg.channel.send("Couldn't find `اسم الروم` channel. ");
      ac.send(`** تم بنجاح قبولك    ${aUser}**`)
 
      msg.delete().catch(O_o=>{});
      var role = msg.guild.roles.find(`name`, '#');
      var role2 = msg.guild.roles.find(`name`, '.');
      var role3 = msg.guild.roles.find(`name`, '!');
      if(!role) return msg.guild.channel.send("Could't find `اسم رتبت البائع` role.");
      aUser.addRole(role);
      aUser.addRole(role2);
      aUser.addRole(role3);
     
          return;
      }
      });
 
client.on("message", msg => {
    if(msg.author.bot) return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
    if(msg.channel.type === 'dm') return;
  let prefix = 'm!'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}رفض`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
      let ac = msg.guild.channels.find(`name`,"✽-القبول-الرفض");
      if(!ac) return msg.channel.send("Couldn't find `اسم الروم` channel. ");
      ac.send(`** تم للاسف رفضك${aUser}**`)
 
      msg.delete().catch(O_o=>{});
     
     
          return;
      }
      });
 
client.on("message", msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
  let prefix = 'm!'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}سحب`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
     
 
      msg.delete().catch(O_o=>{});
      var role = msg.guild.roles.find(`name`, '#');
      var role2 = msg.guild.roles.find(`name`, '.');
      var role3 = msg.guild.roles.find(`name`, '!');
      if(!role) return msg.guild.channel.send("Could't find `اسم رتبت البائع` role.");
      aUser.removeRole(role);
      aUser.removeRole(role2);
      aUser.removeRole(role3);
     
          return;
      }
      });
 
client.on ("guildMemberAdd", member => {
 
   var role = member.guild.roles.find ("name", "𝓜𝓔𝓜𝓑𝓔𝓡");
   member.addRole (role);
 
})
 
client.on ("guildMemberRemove", member => {
   
})





 

 
 
client.login(process.env.BOT_TOKEN);
