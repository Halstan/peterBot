const image = 'http://i.giphy.com/OdkKOr8sRJF1S.gif'

module.exports = (client, message, args) => {
    const { author, mentions } = message;

    const id = `<@${author.id}>`

    message.channel.send({
        embed: {
            color: 'GREEN',
            title: 'Lapaso',
            description: `${id} le ha dado un terrible lapaso a ${mentions.users.first()}`,
            image: {
                url: image,
            },
            timestamp: new Date()
        }
    });
}