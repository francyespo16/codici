if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase();
  const dmaa = args.slice(2).join(" ")
  
  if (cmd=='dm' && msg.author.id=== '442740557169819658'  ) {
   
    
    const taggedUser = msg.mentions.users.first();
   
    const dmpvt = new Discord.MessageEmbed()
    .setColor('#eb3434')
    .setTitle(`hai ricevuto una segnalazione da ${msg.guild.name}`)
    .setDescription(dmaa)
    .setFooter(`autore: ${msg.author.username}`);
    taggedUser.send(dmpvt);



    
    const embe = new Discord.MessageEmbed()
    .setColor('#34eb46')
    .setTitle('done ')
    .setDescription('correctly sent');

    msg.channel.send(embe);
   
  }else{
     
    
    
    const error= new Discord.MessageEmbed()
    .setColor('#eb3434')
    .setTitle('errore ')
    .setDescription('non hai i permessi neccessari per eseguire questo commando');
    
    msg.channel.send(error)



  }
  
