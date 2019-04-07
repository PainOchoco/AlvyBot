const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let activity = args[0]
    if(!args) return message.channel.send("Veuillez mettre une activité.");
    bot.user.setActivity(activity)
};

module.exports.help = {
    name: "setactivity",
    aliases: ["sa"],
    dsc: "Change l'activité du bot.",
    stx: "setactivity <text>"
};
