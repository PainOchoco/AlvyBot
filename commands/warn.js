const Discord = require("discord.js")
const ms = require("ms")
module.exports.run = async (bot, message, args) => {
    const warnedUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(args[0])
      );

      if (warnedUser === "") return message.channel.send("Veuillez mentionner un utilisateur à avertir.")
      if (!warnedUser) return message.channel.send("Cet utilisateur n'existe pas.");

      const warnToAdd = 1;
      const reason = args.join(" ").slice(22);
      bot.warns.ensure(`${warnedUser.id}`, {
        warnings: 0
      });

      let userWarnings = bot.warns.get(`${warnedUser.id}`, "warnings");
      userWarnings += warnToAdd;

      bot.warns.set(`${warnedUser.id}`, userWarnings, "warnings");
      
      if(reason === " ") {
        return message.channel.send("Veuillez mettre une raison de l'avertissement.");
      }

      if (bot.warns.get(`${warnedUser.id}`, "warnings") == 1) {
        message.channel.send(
          `${warnedUser}, **Premier avertissement** | Raison : ${reason}.`
        );

        const warnEmbed1 = new Discord.RichEmbed()
          .setColor("#a9ff21")
          .addField("Utilisateur averti", `${warnedUser.user.tag}`)
          .addField("Nombre d'avertissement", "1/5")
          .addField("Raison de l'avertissement", reason)
          .setFooter(message.author.username, message.author.avatarURL)
          .setTimestamp();

        const warnChannel = message.guild.channels.find(
          x => x.name === "logs"
        );
        warnChannel.send(warnEmbed1);
      }

      if (bot.warns.get(`${warnedUser.id}`, "warnings") == 2) {
        const muteRole = bot.roles.get("534757885847142400")
        const muteTime = "1h";
        warnedUser.addRole(muteRole.id);
        message.channel.send(
          `${warnedUser}, **Deuxième avertissement** Mute pendant ${muteTime} | Raison : ${reason}.`
        );

        setTimeout(function() {
          warnedUser
            .removeRole(muteRole.id)
            .then(warnedUser.addRole(acRole.id));
          message.channel.send(`L'utilisateur ${warnedUser} n'est plus mute.`);
        }, ms(muteTime));

        const warnEmbed2 = new Discord.RichEmbed()
          .setColor("#f7ff21")
          .addField("Utilisateur averti", `${warnedUser.user.tag}`)
          .addField("Nombre d'avertissement", "2/5 - Mute!")
          .addField("Temps du mute:", muteTime)
          .addField("Raison de l'avertissement", reason)
          .setFooter(message.author.username, message.author.avatarURL)
          .setTimestamp();

        const warnChannel = message.guild.channels.find(
          x => x.name === "logs"
        );
        warnChannel.send(warnEmbed2);
      }

      if (bot.warns.get(`${warnedUser.id}`, "warnings") == 3) {
        const muteRole = bot.roles.get("534757885847142400")
        const muteTime = "12h";
        warnedUser.addRole(muteRole.id);
        message.channel.send(
          `${warnedUser} **Troisième avertissement** Mute pendant ${muteTime} | Raison : ${reason}.`
        );

        setTimeout(function() {
          warnedUser.addRole(acRole.id);
          message.channel.send(`L'utilisateur ${warnedUser} n'est plus muté !`);
        }, ms(muteTime));

        const warnEmbed3 = new Discord.RichEmbed()
          .setColor("#9f0000")
          .addField("Utilisateur averti", `${warnedUser.user.tag}`)
          .addField("Nombre d'avertissement", "3/5 - Mute 12h !")
          .addField("Temps du mute :", muteTime)
          .addField("Raison de l'avertissement", reason)
          .setFooter(message.author.username, message.author.avatarURL)
          .setTimestamp();

        const warnChannel = message.guild.channels.find(
          x => x.name === "logs"
        );
        warnChannel.send(warnEmbed3);
      }

      if (bot.warns.get(`${warnedUser.id}`, "warnings") == 4) {
        message.guild.member(warnedUser).kick(reason);

        const warnEmbed = new Discord.RichEmbed()
          .setColor("#9f0000")
          .addField("Utilisateur averti", `${warnedUser.user.tag}`)
          .addField("Nombre d'avertissement", "4/5 - Kick!", true)
          .addField("Raison de l'avertissement", reason)
          .setFooter(message.author.username, message.author.avatarURL)
          .setTimestamp();

        const warnChannel = message.guild.channels.find(
          x => x.name === "logs"
        );
        warnChannel.send(warnEmbed);
      }

      if (bot.warns.get(`${warnedUser.id}`, "warnings") == 5) {
        message.guild.member(warnedUser).ban(reason);

        const warnEmbed = new Discord.RichEmbed()
          .setColor("#9f0000")
          .addField("Utilisateur averti", `${warnedUser.user.tag}`)
          .addField("Nombre d'avertissement", "5/5 - Ban!", true)
          .addField("Raison de l'avertissement", reason)
          .setFooter(message.author.username, message.author.avatarURL)
          .setTimestamp();

        const warnChannel = message.guild.channels.find(
          x => x.name === "logs"
        );
        warnChannel.send(warnEmbed);
}
};
  module.exports.help = {
    name: 'warn',
    aliases: [],
    dsc: "Averti un membre.\n- Au bout de 1 warn : Rien.\n- 2 warns : Mute 1h.\n- 3 warns : Mute 12h\n- 4 warns : Kick\n- 5 warns : Ban.",
    stx: "warn <user>"
  }