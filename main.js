//            _    _             ____        _   
//           / \  | |_   ___   _| __ )  ___ | |_ 
//          / _ \ | \ \ / / | | |  _ \ / _ \| __|
//         / ___ \| |\ V /| |_| | |_) | (_) | |_ 
//        /_/   \_\_| \_/  \__, |____/ \___/ \__|
//                         |___/                 
//        ____                              ____          _      
//       / ___|  ___  _   _ _ __ ___ ___   / ___|___   __| | ___ 
//       \___ \ / _ \| | | | '__/ __/ _ \ | |   / _ \ / _` |/ _ \
//        ___) | (_) | |_| | | | (_|  __/ | |__| (_) | (_| |  __/
//       |____/ \___/ \__,_|_|  \___\___|  \____\___/ \__,_|\___|

// By PαιηOcнσcσ#3570 | 348165644623020032 all Right Reserved © MIT Licence 2019
// For Team Alvyre ©, Minecraft Build Team, Discord Server.

//          <- Consts ->
const config = require('./config.json');
const Discord = require('discord.js');
const fs = require ('fs');
const bot = new Discord.Client({disableEveryone: true});
const db = require ('quick.db');
const Canvas = require ("canvas");
const snekfetch = require ("snekfetch");

//          <- Commands Handler ->
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
     if(err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js")
      if(jsfile.length <= 0) return console.log("[!!!] Commandes introuvables");
      jsfile.forEach((f) => {
        let pull = require(`./commands/${f}`);
        console.log(`✅ Chargement de la commande ${pull.help.name}`)
        bot.commands.set(pull.help.name, pull);
        pull.help.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.help.name);
        });
      });
    });

//          <- Events Handler ->
fs.readdir('./events/', (err, eventFiles) => {
    if (err) console.error(err);
    console.log(`✅ ${eventFiles.length} events ont été chargés !`);
    eventFiles.forEach(file => {
      const eventName = file.split(".")[0];
      const event = require(`./events/${file}`);
      bot.on(eventName, event.bind(null, bot));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  }); 

//          <- Error & Login ->
bot.on("error", console.error);
bot.login(config.token).catch(error => console.log(error));