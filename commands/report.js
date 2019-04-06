const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let reportedUser = 
    message.guild.member(message.mentions.users.first() || 
    message.guild.members.get(args[0]));

    if (!reportedUser) {
        return message.channel.send("L'utilisateur n'existe pas !");
        }
        let reportedReason = args.join(" ");
        let reportEmbed = new Discord.RichEmbed()
        .setDescription('Reports')
        .setColor ('ff0000')
        .addField('👤 | Utilisateur reporté', `${reportedUser} ID : ${reportedUser.id}`)
        .addField('👤 | Utilisateur ayant reporté', `${message.author} ID : ${message.author.id}`)
        .addField('💬 | Salon', message.channel)
        .addField('✍| Raison',reportedReason)
        .setFooter(`AlvyBot | Report`);
        console.log(`[!] Report effectué par ${message.author.username} !`);

    let reportChannel = message.guild.channels.find(`name`, 'logs');
    if (!reportChannel) {
    return message.channel.send('Salon `logs` introuvable, veuillez le créer')
       }
    reportChannel.send(reportEmbed);
};

module.exports.help = {
    name: "report",
    aliases: [],
    dsc: "Rapporte un membre au staff.",
    stx: "report <user> [reason]"
};