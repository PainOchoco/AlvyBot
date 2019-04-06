const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const color = args[0];
    const text = args.join(" ").slice(7);

    if (text === "") return message.channel.send("Mets un texte !");
    if (color.length < 7) {
      return message.channel.send(
        "Un code héxadécimal contient 6 caractères ainsi qu'un # (ex: #ff000: rouge)."
      );
    }
    
    const embed = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setDescription(text)
      .setFooter("AlvyBot | Embed Generator")
      .setTimestamp();
    message.channel.send(embed);

}
module.exports.help = {
    name: "embed",
    aliases: [],
    dsc: "Génere un embed.",
    stx: "embed <hex_color> <text>"
};