     const lockUser = msg.mentions.members.first();
    const chanmodi = client.channels.cache.get('INSERISCI ID CANALE');
    chanmodi.updateOverwrite(lockUser, { VIEW_CHANNEL: false });
    const lockuserconfirm =new Discord.MessageEmbed()
    .setColor('#34eb46')
    .setTitle(`ho bloccato ${lockUser} da ${chanmodi}`)
    msg.channel.send(lockuserconfirm);


    const lockuserpvt = new Discord.MessageEmbed()
    .setColor('#eb3434')
    .setTitle(`sei stato bloccato da : ${chanmodi}`)
    lockUser.send(lockuserpvt);
