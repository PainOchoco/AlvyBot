const Discord = require("discord.js");
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
    let mutedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])
        );
        if (!mutedUser) {
        return message.channel.send("❌ L'utilisateur n'existe pas !");
        }
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("❌ Vous n'avez pas les permissions nécessaires");
        }
        if (mutedUser.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("❌ Vous ne pouvez pas mute cet utilisateur")
        }

        let muteRole = message.guild.roles.find(r => r.name === 'muted');
        if(!muteRole) {
            try {
                muteRole = await message.guild.createRole({
                    name: 'muted',
                    color: '#000',
                    permissions: []
                });
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muteRole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
                console.log('[!] Mute effectué !');
            }
        }

    let muteTime = args[1];
    if (!muteTime) return message.channel.send('Spécifier une durée !');

    await mutedUser.addRole(muteRole.id);
    message.channel.send(`<@${mutedUser.id}> est mute pour ${ms(ms(muteTime))}`);

    setTimeout(() => {
        mutedUser.removeRole(muteRole.id);
        message.channel.send(`<@${mutedUser.id}> n'est plus mute`);
    }, ms(muteTime));
};

module.exports.help = {
    name: 'mute',
    aliases: ['chut'],
    dsc: "Mute un utilisateur (salons textuels) pour une raison définie",
    stx: "mute <user> <time>"
};