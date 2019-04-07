const Discord = require("discord.js");
const qrcode = require("qrcode");
const tempy = require("tempy");

module.exports.run = async (bot, message, args) => {
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send(`**Voici votre QR Code de ${args}**`)
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.png`
                }]
            });
        });
    }
}

module.exports.help = {
    name: "qrcode",
    aliases: ["qrc","qr"],
    dsc: "Génere un QR Code.",
    stx: "qrcode <URL>"
};
