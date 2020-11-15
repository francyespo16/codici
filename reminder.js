 const instaglobale= client.channels.cache.get('ID CANALE');
    var time = setInterval(instatime,TEMPO IN MS);
    function instatime(){
      
      const msginstaglobo = new Discord.MessageEmbed()
      .setColor('#eb3434')
      .setDescription("TESTO")
      instaglobale.send(msginstaglobo)
