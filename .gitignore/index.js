const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';

client.once('ready', () => {
        client.user.setGame("Hypixel Trade! /help");
});

client.login(process.env.TOKEN);
client.on('message', msg => {
var useruser = `Commande executez par: ${msg.author.username}`
var userurl = msg.author.avatarURL;
var user = msg.mentions.users.first();
var member = msg.guild.member(user);
    if (msg.content === "/help"){
       var help = new Discord.RichEmbed()
           .setTitle("Page d'aide.")
           .setDescription("Voici toutes les commandes disponibles !")
           .addField("/help","Affiche la page d'aide", true)
           .addField("/ping","Affiche la latence du bot", true)
           .addField("/trade", "Requête de trade", true)
           .addField("/mp", "MpAll tout le serveur", true)
           .addField("/say", "Faire dire une chose au bot", true)
           .addField("/automp", "Le bot vous envoie un mp", true)
           .setColor("RANDOM")
           .setFooter(useruser, userurl)
           .setTimestamp()
       msg.channel.sendEmbed(help);
   }
else if (msg.content === `/trade`) {
	msg.channel.send(`/trade **(Votre demande)**\nExemple: /trade 1 Plastron en lapis (Moi) vs 6 paladium (Vous).`);
}

  if(msg.content === `/ping` ){

var useruser = `Commande executez par: ${msg.author.username}`
var userurl = msg.author.avatarURL;
var user = msg.mentions.users.first();
var member = msg.guild.member(user);

    let pingEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Chargement...`)
        .setTimestamp()
    msg.channel.send(pingEmbed).then(msg =>{
        pingEmbed.setColor("RANDOM")
        pingEmbed.setDescription(`:ping_pong: Pong ! **\`${client.pings[0]}ms\`** :ping_pong:`)
        pingEmbed.setFooter(useruser, userurl)
        pingEmbed.setTimestamp()
        msg.edit(pingEmbed) 
    })
  }

  if(msg.content.startsWith(`/mp`)) {
  msg.guild.members.forEach(member => {
    var mptext = msg.content.split(' ').slice(1).join(' ')
    if(!mptext) return;
    var perm = msg.member.hasPermission("ADMINISTRATOR")
    if(!perm) return;
  member.send(mptext)
  })
}

    if(msg.content.startsWith (`/automp`)) {
    var automptext = msg.content.split(' ').slice(1).join(' ')
    if(!automptext) return msg.reply('Veuillez spécifié votre message !')
    msg.author.send('Hypixel Trade AutoMP » ' + automptext)
    msg.delete()
  }

  var saytext = msg.content.split(' ').slice(1).join(' ')
  var useruser = `${msg.author.username}`
  const sayEmbed = new Discord.RichEmbed()
  .setColor('0x585858')
  .setTitle('Say:')
  .setDescription(saytext)
  .setTimestamp()
  .setFooter(useruser, userurl)

  if(msg.content.startsWith (`/say`)) {
      var text = msg.content.split(' ').slice(1).join(' ')
      if(!text) return msg.reply('Veuillez spécifié votre message !')
      msg.channel.send(sayEmbed)
      msg.delete()  
  }


});
