const Discord = require("discord.js");
const config = require("../config.json")
module.exports.run = async (bot, message, args) => {
    let Creator = bot.users.get(config.Creator)
    let bugEmbed = new Discord.RichEmbed()
    .setTitle(`⚠ | ${message.author.tag} a trouvé un bug !`)
    .setColor("#ff0000")
    .setDescription(args)
    .setFooter("AlvyBot | Bug")
    .setTimestamp()
    Creator.send(bugEmbed);
};

module.exports.help = {
    name: "bug",
    aliases: [],
    dsc: "Vous avez trouvé un bug ? Remontez-le au dev, PainOchoco.",
    stx: "bug <text>"
};