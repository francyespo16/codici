const setaa = args.slice(2).join(" ") ;        
  const setUser = msg.mentions.members.first()   
  setUser.setNickname(setaa);  
  const nickembe = new Discord.MessageEmbed()    
  .setColor('#34eb46')
  .setTitle('done ')
  .setDescription('correctly changed');

  msg.channel.send(nickembe);




 const nickpvt = new Discord.MessageEmbed()
  .setColor('#eb3434')
  .setTitle(`il tuo nickname e stato cambiato in ${msg.guild.name} `)
  .setDescription(`nuovo nickname:${setaa}`)
 
  setUser.send(nickpvt);

