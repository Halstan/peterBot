const ytdl = require('ytdl-core');

module.exports = (client, message, args) => {
    const voicechannel = message.member.voice.channel;
    if (!args.join(' ')) {
        return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.')
    }

    message.channel.send('Conectando...').then(m => {
        voicechannel.join().then(connection => {
            const url = ytdl(args.join(' '), { filter: 'audioonly', quality: 'lowestaudio' });
            //console.log(url);
            const dispatcher = connection.play(url)
            message.delete()
            message.channel.send('Reproduciendo ahora: ' + args.join(' '))
        }).catch(e => console.log(e))
    }).catch(e => console.log(e));

}