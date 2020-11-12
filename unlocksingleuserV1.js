const unlockUser = msg.mentions.members.first();
    const chanmodi = client.channels.cache.get('INSERISCI ID CANALE');
    chanmodi.permissionOverwrites.get(unlockUser.id).delete();
   
    
    
    const unlockuserconfirm =new Discord.MessageEmbed()
    .setColor('#34eb46')
    .setTitle(`ho sbloccato ${unlockUser} da ${chanmodi}`)
    msg.channel.send(unlockuserconfirm);


    const unlockuserpvt = new Discord.MessageEmbed()
    .setColor('#eb3434')
    .setTitle(`sei stato sbloccato da : ${chanmodi}`)
    unlockUser.send(unlockuserpvt);
