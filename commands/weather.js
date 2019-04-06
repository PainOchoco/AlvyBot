const Discord = require('discord.js')
const weather = require('weather-js');

exports.run = async (bot, message, args) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (err) message.channel.send(err);
        if (result === undefined || result.length === 0) {
            message.channel.send('Veuillez entrer une ville !')
            return;
        }
        var current = result[0].current;
        var location = result[0].location;
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Météo de ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor("#9f0000")
            .addField('Timezone',`UTC${location.timezone}`)
            .addField('Type de degrès',location.degreetype)
            .addField('Temperature',`${current.temperature} Degrees`)
            .addField('Ressenti', `${current.feelslike} Degrees`)
            .addField('Vent',current.winddisplay)
            .addField('Humidité', `${current.humidity}%`)
            .setFooter("AlvyBot | Weather")
            .setTimestamp
            message.channel.send(embed);
  })
}

exports.help = {
    name: 'weather',
    aliases: ["météo"],
    dsc: "Envoi la météo de ta ville !",
    stx: "weather <city>"
  };