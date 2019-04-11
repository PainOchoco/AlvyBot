const Discord = require('discord.js');
const Canvas = require ("canvas")
const snekfetch = require ("snekfetch")
const config = require("../config.json")

module.exports = async (bot, member) => {

const wChannel = bot.channels.get(config.wgChannel)//a changer
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
        let fontSize = 70;
    
        do {
            ctx.font = `${fontSize -= 10}px whitney`;
        } while (ctx.measureText(text).width > canvas.width - 300);
    
        return ctx.font;
    };
    const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px whitney';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Bienvenue sur le serveur', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName} !`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
    
		wChannel.send(attachment);
		member.send("test")
        console.log(`[!] ${member}`, " a rejoint " + `${member.guild.name}`)

let LOG_wEmbed = new Discord.RichEmbed()

    .setAuthor(`${member.displayName} | \`${member.id}\``)
    .setColor("#00bf00")
	.setDescription(`\`${member.displayName}\` est arrivé sur \`${member.guild.name}\`.\n\`${member.guild.memberCount}\` personnes sur \`${member.guild.name}\``)
	.setTimestamp();

    let log = bot.channels.get(config.logChannel)
        log.send(LOG_wEmbed)
}