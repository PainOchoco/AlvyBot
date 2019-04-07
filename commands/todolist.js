const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let title = args.join(" ").slice(3);
    let description = args.join(" ").slice(3).join(" ").slice(20)
    if (args = "new") {
        if (!title) {
            return message.channel.send("Syntaxe : `todolist new [title] [description]`");
        }
        
    let todolist = new Discord.RichEmbed()
    
    }
}
module.exports.help = {
    name: "todolist",
    aliases: ["tdl"],
    dsc: "Automatise les listes à faire !",
    stx: "todolist"
};