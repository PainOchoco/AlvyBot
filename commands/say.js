const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) 
        return message.reply("Vous n'avez pas les permissions nécéssaires");
    
    let messageToBot = args.join(" ");
    
    message.delete().catch();
    message.channel.send(messageToBot);

    console.log(`[!] Say effectué par ${message.author.username}!`);
};

module.exports.help = {
    name: "say",
    aliases: [],
    dsc: "Répète ce que l'utilisateur a dit.",
    stx: "say <text>"
};