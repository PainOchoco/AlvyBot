const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let servIcon = message.guild.iconURL;
    let servEmbed = new Discord.RichEmbed()
    .setDescription ('Informations du Serveur')
    .setColor ('#9f0000')
    .setThumbnail(servIcon)
    .addField(`💬 | Nom du serveur`, message.guild.name)
    .addField('📍 | Location', message.guild.region)
    .addField(`👥 | Nombre de membres`, message.guild.memberCount)
    .addField(`📝 | Nombre de salons`, `${message.guild.channels.filter(channel => channel.type === 'voice').size} 🔊 | ${message.guild.channels.filter(channel => channel.type === 'text').size} 💬`)
    .addField(`📅 | Crée le`, message.guild.createdAt)
    .addField(`🏷 | Roles (${message.guild.roles.size})`, message.guild.roles.map(role => role).join(' '))
    .addField(`😃 | Emojis (${message.guild.emojis.size})`, message.guild.emojis.map(emoji => emoji).join(''))
    .setFooter('AlvyBot | Page d\'information du serveur')
    .setTimestamp();
    
    console.log(`[!] Page d'informations envoyé pour ${message.author.username} !`)

    return message.channel.send(servEmbed);
};

module.exports.help = {
    name: "serverinfo",
    aliases: ["si"],
    dsc: "Envoi la page d'informations du serveur.",
    stx: "serverinfo"
};
