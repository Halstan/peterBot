module.exports = (client, message, args) => {
    const voicechannel = message.member.voice.channel;
    if (!voicechannel) {
        message.channel.send('No estas en un canal de voz');
    } else {
        message.channel.send('Dejando el canal de voz').then(() => {
            voicechannel.leave();
        }).catch(e => console.log(e));
    }
}