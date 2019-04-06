const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
    let { body } = await superagent.get(`https://random.dog/woof.json`);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#9f0000")
    .setTitle('Woof')
    .setImage(body.url)
    .setFooter(`AlvyBot | Dog 🐶`)
    .setTimestamp();
    message.channel.send(dogEmbed);
    console.log(`[!] Woof envoyé par ${message.author.username}!`);
};

module.exports.help = {
    name: "dog",
    aliases: ['ouaf'],
    dsc: "Affiche une image aléatoire de chien.",
    stx: "dog"
};