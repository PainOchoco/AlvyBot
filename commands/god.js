const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id === "348165644623020032") {
        return message.channel.send('**TU ES LE DIEU DES PAINS AUX CHOCOLATS !!**');//PainOchoco
    }
    if(message.author.id === "342709432389468160") {
        return message.channel.send('**TU ES LE DIEU DES BRIOCHES 🍞 !!**');//Briocheboy
    }
    else {
        return message.channel.send('❌ *Désolé, tu n\'es pas un **dieu***');
    }
};

module.exports.help = {
    name: "god",
    aliases: ['dieu'],
    dsc: "Dis si tu es un dieu. Si tu veux en être un, demande a PainOchoco !",
    stx: "god"
};