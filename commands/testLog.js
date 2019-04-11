const Discord = require("discord.js");
const config = require("../config.json")
module.exports.run = async (bot, message, args) => {
    try {
        console.log("[TEST]")
    } catch (e) {
        message.channel.send("ERROR :\n```"+e+"```")
    }
    try {
        message.channel.send(config.logChannel)
        let log = bot.channels.get(config.logChannel)
        log.send("[TEST]")
    } catch (e) {
        
    }
};

module.exports.help = {
    name: "testLog",
    aliases: ["tl"],
    dsc: "Teste les logs de la console et du salon Discord.",
    stx: "testLog"
};
