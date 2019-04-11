const Discord = require('discord.js')
const config = require("../config.json")

module.exports = async (bot, message, member) => {
const gChannel = bot.channels.get(config.wgChannel)//a changer
    
        gChannel.send(`**👋 À bientôt ** ***${member}*** sur **${member.guild.name}** ! `);
        console.log(`[!] ${member}`, " a quitté " + `${member.guild.name}`)
        
let LOG_gEmbed = new Discord.RichEmbed()

    .setAuthor(`${member.displayName}`)
    .setColor("#bf0000")
    .setDescription(`\`${member.displayName}\` a quitté \`${member.guild.name}\`.\nIl y a \`${member.guild.memberCount}\` personnes sur \`${member.guild.name}\``)
    .setTimestamp();
    
    let log = bot.channels.get(config.logChannel)
        log.send(LOG_gEmbed)
}