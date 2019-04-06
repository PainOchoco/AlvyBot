const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

module.exports.run = async (bot, message, args) => {
  if (args.length < 1) {
    return message.channel.send('Veuillez mettre une phrase a flip !');
}

message.channel.send(
    args.join(' ').split('')
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || ' ')
        .reverse().join('')
);
};
module.exports.help = {
    name: "flip",
    aliases: [],
    dsc: "ǝʇxǝʇ ǝl ǝuɹnoʇǝɹ < comme ceci",
    stx: "flip <text>"
};