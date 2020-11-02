
// inserisci in ROLEID l'id del ruolo
//inserisci in IDCANALE  dove far taggare il ruolo

const rechan = client.channels.cache.get('IDCANALE');
    rechan.send(` <@&IDRUOLO>`)
