const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])
        );
        if (!kickedUser) {
        return message.channel.send("L'utilisateur n'existe pas !");
        }
        let kickReason = args.join(' ');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("❌ Vous n'avez pas les permissions nécessaires");
        }
        if (kickedUser.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("❌ Vous ne pouvez pas kick cet utilisateur")
        }


        let kickEmbed = new Discord.RichEmbed()
        .setDescription('Kick')
        .setColor ('ff7f00')
        .addField('👤 Utilisateur kick', `${kickedUser} ID : ${kickedUser.id}`)
        .addField('👤 Utilisateur ayant kick', `${message.author} ID : ${message.author.id}`)
        .addField('💬 Salon', message.channel)
        .addField('✍ Raison',kickReason)
        .setFooter(`AlvyBot | Kick`)
        .setTimestamp();
        console.log(`[!] Kick effectué par ${message.author.username}!`);

    let logsChannel = message.guild.channels.find(`name`, "logs");
    if (!logsChannel) {
        message.guild.createChannel(c => c.name === "logs");
    }
    
    message.guild.member(kickedUser).kick(kickReason);
    logsChannel.send(kickEmbed);
};

module.exports.help = {
    name: "kick",
    aliases: ["bye"],
    dsc: "Expulse un membre du serveur.",
    stx: "kick <user> [reason]"
};