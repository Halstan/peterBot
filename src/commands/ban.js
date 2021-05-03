
module.exports = (client, message, args) => {

    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if(member.hasPermission('BAN_MEMBERS')){
        const target = mentions.users.first();
        if(target){
            try{
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.ban()
                message.channel.send(`${targetMember} el usuario ha sido baneado`)
            }catch(err){
                message.channel.send('No se puedo banear al usuario');
                console.error(err);
            }
        }else{
            message.channel.send(`${tag} especifica alguien a banear`)
        }
    }else{
        message.channel.send(`${tag} No tienes permisos para usar este comando`);
    }
    

}