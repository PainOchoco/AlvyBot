const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) 
        return message.reply("Vous n'avez pas les permissions nécéssaires");
    if(!args[0])
        return message.reply("Veuillez entrer le nombre de messages à supprimer");
        message.channel.bulkDelete(args[0]).then
        message.channel
        .send(`J'ai supprimé **${args[0]} messages** à la demande de @${message.author.tag}`)
        .then(msg => msg.delete(5000));
        console.log(`[!] Suppression de messages effectué par ${message.author.username}!`)
};

module.exports.help = {
    name: "clear",
    aliases: ['purge'],
    dsc: "Supprime une quantité de message défini.",
    stx: "clear <number>"
};