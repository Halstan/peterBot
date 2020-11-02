const images = "https://static.wixstatic.com/media/dabb74_4dca9bbd03e34f9cbf2dd3677aa62507~mv2.jpg/v1/fill/w_552,h_920,al_c,q_90/dabb74_4dca9bbd03e34f9cbf2dd3677aa62507~mv2.jpg";
module.exports = (client, message, args) => {

    message.channel.send({
        embed: {
            color: "RED",
            title: `Aqui tiene su coñac ${message.author.username}`,
            author: {
                name: message.author.username,
                iconURL: message.author.displayAvatarURL(),
            },
            description: "Sirvase y disfrute.",
            timestamp: new Date(),
            image: {
                url: images,
            },
        },
    });
}