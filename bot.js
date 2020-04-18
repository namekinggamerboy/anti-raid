const Discord = require("discord.js");
const client = new Discord.Client();
const antispam = require('discord-anti-spam'); 
const prefix = "!"


// This is the anti-spam protection

client.on('ready', () => {
  // Module Configuration Constructor
   new antispam(client, {
        warnBuffer: 3, // Maximum ammount of messages allowed to send in the interval time before getting warned.
        maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
        interval: 2000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting banned. 
        warningMessage: "please stop spamming!", // Message users receive when warned. (message starts with '@User, ' so you only need to input continue of it.) 
        banMessage: "Has been banned for spamming!", // Message sent in chat when user is banned. (message starts with '@User, ' so you only need to input continue of it.) 
        maxDuplicatesWarning: 5,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
        maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned.
        deleteMessagesAfterBanForPastDays: 7, // Deletes the message history of the banned user in x days.
        exemptRoles: [""], // Name of roles (case sensitive) that are exempt from spam filter.
        exemptUsers: [""] // The Discord tags of the users (e.g: MrAugu#9016) (case sensitive) that are exempt from spam filter.
      });
      
  // Rest of your code
});

client.on('ready', () => {
    console.log(`Logging as ${client.user.tag}`);
  });


  // This is for all links

  client.on("message", (message) => {
    if (message.channel.id === '') return; // Maybe You Wanna Ignore A Channel
	  if (message.channel.id === '') return; // Same here you need to just enter the channel id
    if (message.content.includes("https://")) {
      message.delete();
    
    }
    if (message.content.includes("http://")) {
      message.delete();
   
    }
    if (message.content.includes("www.")) {
      message.delete();
   
    }
  });
  

  // This is the same as up but more for disocrd invite links


  client.on(`message`, async message => {
    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === "") return; // This is to ignore a user maybe you
		 if (message.channel.id === '') return; //ignore channel
		if (message.channel.id === '') return; //ignore channel
            await message.delete();
            await message.channel.send(`${message.author}, Dont send invite links here!`).then(sentMessage => {   
       sentMessage.delete(5000); // Message will delete in 5 sec
});
  
	}
    } catch (e) {
        console.log(e);
    }
});


// This is a ban command, you can remove it if you want.

 
client.on('message', message => {
    var prefix = "!"
    if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;
        
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "ban") {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
       
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply("**Mention Someone**");
if (!message.guild.member(user)
.bannable) return message.reply("**I Cant BAN Someone With Higher Role Than Me**");

message.guild.member(user).ban(7, user);

const banembed = new Discord.RichEmbed()
.setAuthor(`BANNED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
message.channel.send({
  embed : banembed
})
}
});


// Enter your bot token here and done.

client.login("token");
