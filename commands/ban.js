const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])
        );
        if (!bannedUser) {
        return message.channel.send("L'utilisateur n'existe pas !");
        }
        let banReason = args.join(' ');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("❌ Vous n'avez pas les permissions nécessaires");
        }
        if (bannedUser.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("❌ Vous ne pouvez pas ban cet utilisateur")
        }


        let banEmbed = new Discord.RichEmbed()
        .setDescription('Ban')
        .setColor ('ff0000')
        .addField('Utilisateur ban', `${bannedUser} ID : ${bannedUser.id}`)
        .addField('Utilisateur ayant ban', `${message.author} ID : ${message.author.id}`)
        .addField('Salon', message.channel)
        .addField('Raison',banReason)
        .setFooter(`AlvyBot | Ban`)
        .setTimestamp();
        console.log(`[!] Ban effectué par${message.author.username}!`);

    let logsChannel = message.guild.channels.find(`name`, "logs");
    if (!logsChannel) {
        message.guild.createChannel(c => c.name === "logs");
    }
    
    message.guild.member(bannedUser).ban(banReason);
    logsChannel.send(banEmbed);
};

module.exports.help = {
    name: "ban",
    aliases: [],
    dsc: "Banni un membre du serveur.",
    stx: "ban <user> [reason]"
};