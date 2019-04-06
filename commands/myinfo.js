const Discord = require("discord.js");
const moment = require("moment");
exports.run = async (bot, message, args) => {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
		.setColor('#9f0000')
		.setThumbnail(user.avatarURL)
		.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
		.addField("🆔", `\`${user.id}\``)
		.addField("👤 | Pseudo", `${member.nickname !== null ? `${member.nickname}` : `${message.author.username}`}`)
		.addField("📅 | Crée le", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
		.addField("📅 | A rejoint le serveur le", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
		.addField("⚪ | Statut", `${user.presence.status}`, true)
		.addField("🎮 | Game", `${user.presence.game ? user.presence.game.name : 'None'}`)
        .addField("🏷 | Rôles", member.roles.map(role => role).join(' '))
        .setFooter("AlvyBot | My Info")
        .setTimestamp();
     message.channel.send(embed);
}
exports.help = {
   name: "me",
   aliases: ['myinfo',"mi"],
   dsc: "Envoi la page d'information de toi",
   stx: "me"
}