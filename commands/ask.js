const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args[1]) return message.reply("Entrez une question");

    let replies = ["Oui",
    "Non",
    "Évidemment",
    "Peut-être",
    "à moitié...",
    "à 25%",
    "à 50%",
    "à 75%",
    "à 100% !",
    "Eeeuuuuh...",
    "Pas du tout !",
    "Peut-être...héhé",
    "Nop !",
    "OUIIII !",
    "yep",
    "NOOON !",
    "chépa",
    "idk",
    "whaaat ? t'es serieux ?",
    "wtf ?",
    "Nahh, tu plaisantes"];
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let askEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#9f0000")
    .addField("Question", question)
    .addField("Réponse", replies[res])
    .setFooter(`AlvyBot | Ask 🎱`)
    .setTimestamp();

    message.channel.send(askEmbed);
    console.log(`[!] Ask effectué par ${message.author.username}!`);
};
  module.exports.help = {
    name: 'ask',
    aliases: ['?', 'question', '8ball'],
    dsc: "Envoi un réponse aléatoire d'une question fermée.",
    stx: "ask <closed_question>"
  }