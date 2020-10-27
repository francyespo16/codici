 const chanlock = client.channels.cache.get('686678580671021093');
    chanlock.updateOverwrite(chanlock.guild.roles.everyone, {SEND_MESSAGES: true });
    const donelock = new Discord.MessageEmbed()
    .setColor('#eb3434')
    .setDescription(`${chanlock} e stato abilitato per l'invio dei messaggi`);
    msg.channel.send(donelock)


    const warnlock  = new Discord.MessageEmbed()
    .setColor('#f50000')
    .setDescription(`il canale e stato abilitato per l'invio dei messaggi`);
    chanlock.send(warnlock)
