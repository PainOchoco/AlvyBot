const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send("**Calcul en cours...**");
    msg.edit(`**Pong !**🏓\n**⏱ | Latence : \`${msg.createdTimestamp - message.createdTimestamp}\`ms**\n**💗 | API : \`${Math.round(bot.ping)}\`ms**`);
    console.log(`[!] Ping Pong effectué par ${message.author.username} !`);
}

module.exports.help = {
    name: "ping",
    aliases: ['ms'],
    dsc: "Envoi le temps de délai de l'API Discord et de la latence de la connexion du bot.",
    stx: "ping"
}