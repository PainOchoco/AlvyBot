const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (message.author.id != "348165644623020032") {
        return message.channel.send("Seulement mon petit PainOchoco peut faire ça !")
    }

    if (!args[0]) {
        return message.channel.send("Veuillez dire le nom d'une commande.")
    }
    let commandName = args[0].toLowerCase();

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch (e) {
        return message.channel.send(`Je n'arrive pas à reload \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`La commande \`${args[0].toUpperCase()}\` a bien été reload !`)
};
  module.exports.help = {
    name: 'reload',
    aliases: [],
    dsc: "Reload un fichier.",
    stx: "reload <file>"
  }