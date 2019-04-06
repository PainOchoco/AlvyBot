const Discord = require("discord.js");
const moment = require("moment")
const ms = require("ms")
module.exports.run = async (bot, message, args) => {
    let Timer = args[0];

if(!args[0]){
  return message.channel.send("Veuillez entrer un temps valide, `s, m, h` !");
}

if(args[0] <= 0){
  return message.channel.send("Veuillez entrer un temps valide, `s, m, h` !");
}

message.channel.send(":white_check_mark:⏱  | Timer est mis à **" + `${ms(ms(Timer), {long: true})}`+ "**")

setTimeout(function(){
  message.channel.send(`🔔 | Le Timer est **fini** !\n⏱ | Timer : ${ms(ms(Timer), {long: true})} - ` + message.author.toString())

}, ms(Timer));
}
module.exports.help = {
    name: "reminder",
    aliases: ["alarm"],
    dsc: "Mets une alarme.",
    stx: "reminder <time>"
};