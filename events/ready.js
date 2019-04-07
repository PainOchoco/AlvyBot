module.exports = async (bot, message) => {
console.log(`
    ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃        ${bot.user.username} est connecté !        ┃
    ┃ -Pour ${bot.users.size} utilisateurs                ┃
    ┃ -Sur ${bot.channels.size} channels                     ┃
    ┃ -Sur ${bot.guilds.size} serveurs                      ┃
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`
    );
    //Activités 
    bot.user.setActivity(`la Team Alvyre`, { type: "Watching" });
        setTimeout(game2, 5000)//Regarde la Team Alvyre
    
    function game1() {
        bot.user.setActivity(`oh yeaaaaah`, { type: "Listening" });
        setTimeout(game2, 5000)//Écoute oh yeaaaaah
    }
    
    function game2() {
        bot.user.setActivity(`la Team Alvyre`, { type: "Watching" });
        setTimeout(game3, 5000)//Joue à [&help]
    }
    function game3() {
        bot.user.setActivity(`@PαιηOcнσcσ#3570`, { type: "Watching" });
         setTimeout(game1, 5000);//Regarde @PαιηOcнσcσ#3570
    }
}