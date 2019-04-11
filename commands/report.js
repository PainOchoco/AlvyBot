const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let reportedUser = 
    message.guild.member(message.mentions.users.first() || 
    message.guild.members.get(args[0]));

    if (!reportedUser) {
        return message.channel.send("L'utilisateur n'existe pas !");
        }
        let reportedReason = args.join(" ");
        let LOG_reportEmbed = new Discord.RichEmbed()
        .setDescription('Reports')
        .setColor ('ff0000')
        .addField('👤 | Utilisateur reporté', `${reportedUser} ID : ${reportedUser.id}`)
        .addField('👤 | Utilisateur ayant reporté', `${message.author} ID : ${message.author.id}`)
        .addField('💬 | Salon', message.channel)
        .addField('✍| Raison',reportedReason)
        .setFooter(`AlvyBot | Report`);
        console.log(`[!] Report effectué par ${message.author.username} !`);

        let log = bot.channels.get(config.logChannel)
        log.send(LOG_reportEmbed)
};

module.exports.help = {
    name: "report",
    aliases: [],
    dsc: "Rapporte un membre au staff.",
    stx: "report <user> [reason]"
};