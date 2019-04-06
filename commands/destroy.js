const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const disconnection = bot.emojis.get("534794459628568577");
    if(message.author.id === "348165644623020032") {//PainOchoco
        message.channel.send("**Déconnexion...**").then(m => {
            m.edit(`**${disconnection} | Déconnexion effectué, ${message.author.username} !**`)
        });
        console.log('[!] Déconnexion...');
        bot.destroy()
        return console.log(`[!] AlvyBot est déconnecté par ${message.author.username}!`);
    } else { 
        return message.channel.send("Nop ! Tu n'as pas le pouvoir de me déconnecter !")
    }
};

module.exports.help = {
    name: "destroy",
    aliases: [],
    dsc: "Éteins le bot. *À utiliser en cas d'urgence.*",
    stx: "destroy"
};
