const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';

client.once('ready', () => {
        client.user.setGame("Trade! /help");
});

client.login(process.env.TOKEN);
client.on('message', message => {
	if (message.content === '/ping') {
		message.channel.send('Pong !');
}
    if (message.content === "/help"){
       var help = new Discord.RichEmbed()
           .setTitle("Page d'aide.")
           .setDescription("Voici toutes les commandes disponibles !")
           .addField("/help","Affiche la page d'aide", true)
           .addField("/ping","Pong ! :wink:", true)
           .addField("/trade", "Requête de trade", true)
           .setColor("RANDOM")
           .setFooter(`Request by ${message.author.username}${message.author.discriminator}`)
       message.channel.sendEmbed(help);
   }
else if (message.content === `/trade`) {
	message.channel.send(`/trade **(Votre demande)**\nExemple: /trade 1 Plastron en lapis (Moi) vs 6 paladium (Vous).`);
}

});
