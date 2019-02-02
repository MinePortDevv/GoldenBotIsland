const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';

client.once('ready', () => {
	console.log('\nNom du bot : GoldBot\nCréateur : Adam7680\nServeur : Golden Island\nBot actif : 1');
        client.user.setGame("Aide : /help");
});

client.login(process.env.TOKEN);
client.on('message', message => {
	if (message.content === '/ping') {
		message.channel.send('Pong ! :wink:');
}
    if (message.content === "/help"){
       var embed = new Discord.RichEmbed()
           .setTitle("Page d'aide !")
           .setDescription("Voici toutes les commandes disponibles !")
           .addField("/help","Affiche la page d'aide", true)
           .addField("/ping","Pong ! :wink:", true)
           .addField("/test","Test.", true)
           .addField("/discord","Donne le discord de Golden Island !", true)
           .addField("/by","Cite le créateur", true)
           .addField("/prefix","Affiche le prefix du bot !", true)
           .addField("/bot","Affiche quelques informations sur le bot !", true)
           .addField("/invite","Donne l'invitation du bot", true)
           .addField("/serverinfo","Donne des informations sur le serveur actuel ( Alias : /si )", true)
           .addField("/myinfo","Donne des informations sur vous ( Alias : /mi )", true)
           .setColor("0xFFBF00")
           .setFooter("Cree par @! Adam7680 [ F/N ]#3386")
       message.channel.sendEmbed(embed);
   }
if (message.content === '/discord') {
	message.channel.send('__Voici le discord de la Golden Island: https://discord.gg/ZfjC5EG');
}
if (message.content === '/test') {
	message.channel.send('Test effectuez, le bot est bien en **ligne** !');
}
if (message.content === '/by') {
	message.channel.send('Ce bot a etait __cree par__ : **! Adam7680 [ F/N ]#3386**\nLe discord a aussi etait __cree par lui__ et donnez à **Ender_King#7553**');
}
if (message.content === '/prefix') {
	message.channel.send('Prefix du bot : /');
}
if (message.content === '/bot') {
	message.channel.send('Bot cree par : ! Adam7680 [ F/N ]#3386\nPrefix : /\nDiscord : https://discord.gg/ZfjC5EG');
}
if (message.content === '/invite') {
	message.channel.send('**Pour invitez le bot** : https://discordapp.com/api/oauth2/authorize?client_id=523443665042145281&permissions=8&scope=bot');
}
else if (message.content === `/serverinfo`) {
	message.channel.send(`__Nom du serveur__ : ${message.guild.name}\n__Total de membres__ : ${message.guild.memberCount}`);
}
else if (message.content === `/si`) {
	message.channel.send(`__Nom du serveur__ : ${message.guild.name}\n__Total membres__ : ${message.guild.memberCount}`);
}
else if (message.content === `/myinfo`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
else if (message.content === `/mi`) {
	message.channel.send(`__Votre pseudo :__ ${message.author.username}\n__Votre ID__ : ${message.author.id}`);
}

});
