const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
    let { body } = await superagent.get(`http://aws.random.cat//meow`);

    let catEmbed = new Discord.RichEmbed()
    .setColor("#9f0000")
    .setTitle('Miaou')
    .setImage(body.file)
    .setFooter(`AlvyBot | Cat 🐱`)
    .setTimestamp();
    message.channel.send(catEmbed);
    console.log(`[!] Miaou effectué par ${message.author.username}!`)
};

module.exports.help = {
    name: "cat",
    aliases: ['miaou'],
    dsc: "Affiche une image aléatoire de chat.",
    stx: "cat"
};