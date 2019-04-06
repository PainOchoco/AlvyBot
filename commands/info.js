const Discord = require("discord.js");
const os = require('os');
const arch = os.arch();

exports.run = async (bot, message, args) => {
    
  let bicon = bot.user.displayAvatarURL;
  let totalSeconds = (bot.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = `${hours}h ${minutes}m ${seconds}s`;
    let helpmember = new Discord.RichEmbed()
      .setColor('#9f0000')
      .addField("🤖| Nom du bot", `<@!531057619037585409>`)
      .addField("👑| Créateur", "<@!348165644623020032>")
      .addField('🔬| V.Node', `${process.version}`)
      .addField('📡| Library', 'discord.js')
      .addField('💻| Operating System', `${os.platform} ${arch}`)
      .addField('📊| System Stats', `• Memory  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB \n• Uptime ${uptime}`) 
      .setThumbnail(bicon)
      .setFooter("AlvyBot | Info")
      .setTimestamp()
    message.channel.send(helpmember);
}
exports.help = {
   name: "info",
   aliases: ['bot'],
   dsc: "Envoi la page d'informations du bot.",
   stx: "info"
}