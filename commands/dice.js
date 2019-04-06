const Discord = require("discord.js");
const mathjs = require("mathjs")
module.exports.run = async (bot, message, args) => {
let replies = ["Un | :one:", "Deux | :two:", "Trois | :three:", "Quatre | :four:", "Cinq | :five:", "Six | :six:"];
let result = Math.floor((Math.random() * 6) + 1);


    try {
        let DiceEmbed = new Discord.RichEmbed()
            .setTitle("Lancé de dé 🎲")
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
            .setColor("#9f0000")
            .setDescription(replies[result])
            .setFooter("AlvyBot | Dice 🎲")
        message.channel.send("🎲 | **3...**").then(msg => {
            msg.edit("🎲 | **2...**")
            msg.edit("🎲 | **1...**")
            msg.edit(DiceEmbed)
        })
    } catch (e) {
        console.log(e.stack);
    } 
}
module.exports.help = {
    name: "dice",
    aliases: [],
    dsc: "Lance un dé et donne un résultat aléatoire.",
    stx: "dice"
};