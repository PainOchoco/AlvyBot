const Discord = require("discord.js");
const cowsay = require("cowsay");

module.exports.run = async (bot, message, args) => {
    let text = args.join(" ");

    message.channel.send("```" + cowsay.say({text}) + "```")
    console.log(cowsay.say({text}));
}

module.exports.help = {
    name: "cowsay",
    aliases: ["cs"],
    dsc: "Meuh",
    stx: "cowsay <text>"
}