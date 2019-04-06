const Discord = require("discord.js");
const math = require("mathjs")

module.exports.run = async (bot, message, args) => {
    if (!args [0]) return message.channel.send('Veuillez entrer un calcul');
    let calcul;

    try {
        calcul = math.eval(args.join(' ')); 
    } catch (e) {
        return message.channel.send('Hum...Veuillez entrer des chiffres valides');
    }

    const mathEmbed = new Discord.RichEmbed()
    .setColor('#9f0000')
    .addField('Chiffres', args.join(' '))
    .addField('Résultat', calcul)
    .setFooter(`AlvyBot | Math`)
    .setTimestamp()

    message.channel.send(mathEmbed);
    console.log(`[!] Calcul effectué par ${message.author.username}!`);
};

module.exports.help = {
    name: "math",
    aliases: ['calcul'],
    dsc: "Calcule un calcul ._.",
    stx: "math <caclul>"
};