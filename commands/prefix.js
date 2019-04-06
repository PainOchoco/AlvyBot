const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) 
        return message.reply("Vous n'avez pas les permissions nécéssaires");
    if(!args[0] || args [0 == "help"])
        return message.reply("Veuillez mettre le nouveau préfixe à la suite de la commande");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    }
    
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
        if(err) console.log(err);
        console.log(`[!] Changement de préfixe effectué par ${message.author.username} !`);
        message.channel.send(`Le préfixe a bien été changé !`)
    })
};

module.exports.help = {
    name: "setprefix",
    aliases: ['prefix'],
    dsc: "Change le préfixe du bot.",
    stx: "prefix <new_prefix>"
};