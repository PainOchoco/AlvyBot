const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let userSuggestion = args.slice(0).join(" ");
let user = message.author 

if (args.length === 0) {
    message.delete();
    return message.channel.send('❌ Veuillez mettre une question à la suite').then(m => m.delete(4000))
    };

message.delete();
let newEmbed = new Discord.RichEmbed()
    .setColor("#9f0000")
    .setAuthor(`${user.tag}`, `${user.avatarURL}`)
    .setTitle('Sondage')
    .setDescription(userSuggestion)
    .setFooter("AlvyBot | Poll Generator")
    .setTimestamp()
return message.channel.send(newEmbed).then(async msg => {
        await msg.react('✅');
        await msg.react('❌');
    });

};


module.exports.help = {
    name: "poll",
    aliases: ['sondage'],
    dsc: "Génere un sondage. (Referendum)",
    stx: "poll <closed_question>"
};