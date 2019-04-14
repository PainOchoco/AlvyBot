const config = require('../config.json');
const Discord = require('discord.js');
const fs = require ('fs');
module.exports = async (bot, message) => {
    if(message.author.bot) return;
    
    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    var prefix = prefixes[message.guild.id].prefixes;

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (prefix == command.slice(0, 1)) { 
        let commandFile = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
        if (commandFile) commandFile.run(bot, message, args); 
    }
    //          <- Swear Words Detector ->
    const swearWords = ["chocolatine", "bite", "ntm", "tg", "pd"];
        if(swearWords.some(word => message.content.includes(word)) ) {
            message.delete();
            message.channel.send(`*Tu as dit un mot **interdit** ${message.author.username}!*`);
            return console.log(`[!] Mot interdit par ${message.author.username}`);
}

//          <- Demandes de maps automatisées ->

    if (message.channel.id === "547401013938618368") {
        let commande = message.content;
        const yes = bot.emojis.get("553535408063905792")
        const no = bot.emojis.get("553535446420946954")
        message.react(yes).then(r => {
            message.react(no);
        })
        message.channel.send(`**Validez-vous votre commande ${message.author.username} ?**`)
        
        // FILTRE ✅ | ❌
        const filter = (reaction, user) => user.id === message.author.id;
        const collected = await message.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
        const reaction = collected.first();
            
            // Commande acceptée | YES
    		if (reaction.emoji.name === yes.name) {
                let log = bot.channels.get(config.logChannel)
                
                let commandEmbed = new Discord.RichEmbed()
                .setAuthor(`Commande de ${message.author.tag}`, `${message.author.avatarURL}`)
                .setColor("#ff8f20")
                .setTitle("**Commande**")
                .setDescription(commande)
                .setFooter("AlvyBot | Commande - Logs")
             
            log.send(commandEmbed);

                let yepEmbed = new Discord.RichEmbed()
                .setColor("#00bf00")
                .setTitle(`**📨 ${yes} Votre commande a bien été envoyé ${message.author.username} !**`)
                .setFooter("AlvyBot | Commande envoyée")
                .setTimestamp();
            
            message.channel.send(yepEmbed)
            
            message.author.send("**__Demande de map__**\n\n**- Le suivi de votre commande s'affichera ici !**\n*Merci de patienter, la Team Alvyre répondra dès qu'elle sera disponible.*")
            
            let staffChannel = bot.channels.get(config.staffChannel)
            let staffEmbed = new Discord.RichEmbed()
            .setColor("#ff7f00")
            .setAuthor(`Commande de ${message.author.tag}`, `${message.author.avatarURL}`)
            .setDescription(commande)
            .addField("Veuillez réagir aux émojis ci-dessous.", `Commande ${yes} Acceptée | ${no} Refusée | 👁 Vue `)
            .setFooter("AlvyBot | Commande - En attente")
            .setTimestamp();
    
            staffChannel.send(staffEmbed).then(async msgStaff => {
                msgStaff.react(yes).then(r => {
                msgStaff.react(no)
                msgStaff.react('👁')
                })
                //FILTRE 2
        const filter2 = (reaction, user) => !user.bot;
        
        msgStaff.awaitReactions(filter2, {max:1, errors: ['time'] }).then(collected => {
                const reaction2 = collected.first();
                
            if (reaction2.emoji.name === yes.name) {
                message.author.send("**Votre commande a été acceptée par la Team Alvyre**")
            } else if (reaction2.emoji.name === no.name) {
                message.author.send("**Votre commande a été refusée par la Team Alvyre**")
            } else return;
            const filter3 = (reaction, user) => {
                return ['👁'].includes(reaction.emoji.name) && !user.bot;
            };
            msgStaff.awaitReactions(filter3, {max:1, errors: ['time'] }).then(collected => {
                const reaction3 = collected.first();
                if (reaction3.emoji.name === '👁') {
                    message.author.send("**Votre commande a été vue par la Team Alvyre**")
                }
            })
        });
    })
    
    
    
            // Commande refusée | NO
    		} else if (reaction.emoji.name === no.name) {
            let nopEmbed = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setTitle(`**❌ Commande de ${message.author.username} annulée**`)
            .setFooter("AlvyBot | Commande annulée")
            .setTimestamp();
            message.channel.send(nopEmbed)
            }
        };

//          <- Recrutements automatisées ->

if (message.channel.id === "551725359196798986") {
    let cv = message.content;
    const yes = bot.emojis.get("553535408063905792")
    const no = bot.emojis.get("553535446420946954")
    message.react(yes).then(r => {
        message.react(no);
    })
    message.channel.send(`**Validez-vous votre CV ${message.author.username} ?**`)
    
    // FILTRE ✅ | ❌
    const filter = (reaction, user) => user.id === message.author.id;
    const collected = await message.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
        
        // CV acceptée | YES
        if (reaction.emoji.name === yes.name) {
            let log = bot.channels.get(config.logChannel)

            let CVEmbed = new Discord.RichEmbed()
            .setAuthor(`CV de ${message.author.tag}`, `${message.author.avatarURL}`)
            .setColor("#ff8f20")
            .setTitle("**CV**")
            .setDescription(cv)
            .setFooter("AlvyBot | CV - Logs")
            .setTimestamp();
         
        log.send(CVEmbed);

            let yepEmbed = new Discord.RichEmbed()
            .setColor("#00bf00")
            .setTitle(`**📨 ${yes} Votre CV a bien été envoyé ${message.author.username} !**`)
            .setFooter("AlvyBot | CV envoyé")
            .setTimestamp();
        
        message.channel.send(yepEmbed)
        
        message.author.send("**__Recrutement__**\n\n**Le suivi de votre CV s'affichera ici.**\n*Merci de patienter, la Team Alvyre répondra dès qu'elle sera disponible.*")
        
        let staffChannel = bot.channels.get(config.staffChannel)
        let staffEmbed = new Discord.RichEmbed()
        .setColor("#ff7f00")
        .setAuthor(`Commande de ${message.author.tag}`, `${message.author.avatarURL}`)
        .setDescription(cv)
        .addField("Veuillez réagir aux émojis ci-dessous.", `${yes}: Acceptée | ${no}: Refusée | 👁: Vue `)
        .setFooter("AlvyBot | CV - En attente")

        staffChannel.send(staffEmbed).then(msgStaff => {
            msgStaff.react(yes),
            msgStaff.react(no),
            msgStaff.react('👁')
            })
            //FILTRE 2
    const filter2 = (reaction, user) => !user.bot;
    
    msgStaff.awaitReactions(filter2, {max:1, errors: ['time'] }).then(collected => {
            const reaction2 = collected.first();
            
        if (reaction2.emoji.name === yes.name) {
            message.author.send("**Votre CV a été acceptée par la Team Alvyre !**")
        } else if (reaction2.emoji.name === no.name) {
            message.author.send("**Votre CV a été refusée par la Team Alvyre !**")
        } else return;
        const filter3 = (reaction, user) => {
            return ['👁'].includes(reaction.emoji.name) && !user.bot;
        };
        msgStaff.awaitReactions(filter3, {max:1, errors: ['time'] }).then(collected => {
            const reaction3 = collected.first();
            if (reaction3.emoji.name === '👁') {
                message.author.send("**Votre CV a été vue par la Team Alvyre, merci de patienter avant d'avoir une réponse.**")
            }
        })
    });
}
        // CV refusée | NO
        } else if (reaction.emoji.name === no.name) {
        let nopEmbed = new Discord.RichEmbed()
        .setColor("#bf0000")
        .setTitle(`**❌ CV de ${message.author.username} annulé**`)
        .setFooter("AlvyBot | CV annulé")
        .setTimestamp();
        message.channel.send(nopEmbed)
    }
};
