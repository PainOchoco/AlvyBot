const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const slf = bot.emojis.get("546217083470479360");
    const plm = bot.emojis.get("546065613265698866");
    const twi = bot.emojis.get("546065648690659358");
    const ytb = bot.emojis.get("546216796622159873");
    let YtbEmbed = new Discord.RichEmbed()

    .setAuthor("Youtube")
    .setColor("#ff0000")
    .setDescription(`${ytb} [Viens voir nos trailers sur Youtube !](https://www.youtube.com/channel/UCDXWO7Ti6ObBObn1A5nnbvg)`)

    let TwitterEmbed = new Discord.RichEmbed()

    .setAuthor("Twitter")
    .setColor("#00aced")
    .setDescription(`${twi}[Passe faire un tour sur notre Twitter !](https://twitter.com/teamalvyre?lang=fr)`);
    
    let SellfyEmbed = new Discord.RichEmbed()

    .setAuthor("Sellfy")
    .setColor("#00ab00")
    .setDescription(`${slf}[Tu veux acheter un build fait par nous ? Check notre Sellfy !](https://sellfy.com/team-alvyre)`);

    let McPlntEmbed = new Discord.RichEmbed()

    .setAuthor("Planet Minecraft")
    .setColor("#613f10")
    .setDescription(`${plm}[Et voici notre Planet Minecraft](https://www.planetminecraft.com/member/teamalvyre/)`);

    message.channel.send(YtbEmbed);
    message.channel.send(TwitterEmbed);
    message.channel.send(SellfyEmbed);
    return message.channel.send(McPlntEmbed);

}

module.exports.help = {
    name: "links",
    aliases: ['link',"liens"],
    dsc: "Envoi les liens des réseaux sociaux de la __Team Alvyre__ !",
    stx: "links"
};