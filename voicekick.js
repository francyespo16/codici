 const discoUser = msg.mentions.members.first();
   
    discoUser.voice.setChannel(null);
    const warndisco = new Discord.MessageEmbed()
    .setColor('#34eb46')
    .setTitle(`disconessione completata di  ${discoUser}`)
    msg.channel.send(warndisco);


    const discopvt = new Discord.MessageEmbed()
    
    .setColor('#eb3434')
    .setTitle(`sei stato disconneso da una chat vocale di: ${msg.guild.name}`)
    
    discoUser.send(discopvt);
   
