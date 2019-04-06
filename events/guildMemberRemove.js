const Discord = require('discord.js')

module.exports = async (bot, message, member) => {
const gChannel = bot.channels.get("546012680201175108")//a changer
    
        gChannel.send(`**👋 À bientôt ** ***${member}*** sur **${member.guild.name}** ! `);
        console.log(`[!] ${member}`, " a quitté " + `${member.guild.name}`)
        
let gEmbed = new Discord.RichEmbed()

    .setAuthor(`${member.displayName}`)
    .setColor("#bf0000")
    .setDescription(`\`${member.displayName}\` a quitté \`${member.guild.name}\`.\nIl y a \`${member.guild.memberCount}\` personnes sur \`${member.guild.name}\``)
    .setTimestamp();
    let logsChannel = bot.channels.get("531881225829351425")//a changer
    logsChannel.send(gEmbed);
}