const Discord = require("discord.js");
const fs = require ('fs');

module.exports.run = async (bot, message, args, commands) => {
    let botIcon = bot.user.displayAvatarURL;

if (!args.join(" ")) {
    let helpEmbed = new Discord.RichEmbed()
       .setTitle ('Page d\'aide de **AlvyBot**')
       .setColor ('#9f0000')
       .setThumbnail(botIcon)
       .addField('⚙ | **Administration** (6)', '`kick`,`ban`,`mute`,`clear`,`report`,`destroy`.')
       .addField('🛠 | **Utiles** (12)', '`ping`,`help`,`serverinfo`,`info`,`setprefix`,`say`,`math`,`poll`,`weather`,`timer`,`embed`,`links`.')
       .addField('😃 | **Fun** (7)', '`dog`,`cat`,`god`,`ascii`,`dice`,`flip`,`ask`.')
       .setFooter(`AlvyBot | Help`);
       
       message.channel.send(helpEmbed);
       return console.log(`[!] Page d\'aide envoyée par ${message.author.username}!`);
    } else if (bot.commands.has(args.join(" "))){
        let command = bot.commands.get(args.join(' '));
        
        let helpEmbedCommand = new Discord.RichEmbed()
        .setTitle (`Page d'aide de la commande **${command.help.name}**`)
        .setColor ('#9f0000')

        if (command.help.dsc) {
            helpEmbedCommand.addField(`💬 | Description`, `**${command.help.dsc}**`);
        } if (command.help.stx) {
            helpEmbedCommand.addField(`⌨ | Syntaxe`, `**\`${command.help.stx}\`**`);
        } if (command.help.aliases) {
            helpEmbedCommand.addField(`🖇 | Alias`, `**${command.help.aliases}**`);
        } else {
            helpEmbedCommand.addField(`**Erreur** | Aucune information détectée pour la commande **${command.help.name}`);
            console.log(`[!!] Aucune information détectée pour ${command.help.name}.`)
        }
        
        message.channel.send(helpEmbedCommand);
        return console.log(`[!] Page d\'aide de commande envoyée par ${message.author.username}!`);
    }
}


module.exports.help = {
    name: "help",
    aliases: ['?'],
    dsc: "Envoi de la page d'aide des commandes du bot.",
    stx: `help [command_name]`
};