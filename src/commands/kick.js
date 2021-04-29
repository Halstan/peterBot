const rolMod = 'Mod';

module.exports = (client, message, args) => {

    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')){
        const target = mentions.users.first();
        if(target){
            try{
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.kick()
                message.channel.send(`${targetMember} el usuario ha sido expulsado`)
            }catch(err){
                message.channel.send('No se puedo expulsar al usuario');
                console.error(err);
            }
        }else{
            message.channel.send(`${tag} especifica alguien a expulsar`)
        }
    }else{
        message.channel.send(`${tag} No tienes permisos para usar este comando`);
    }

}