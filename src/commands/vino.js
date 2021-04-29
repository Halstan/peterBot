const images = "https://www.catadelvino.com/uploads/que-significa-la-categoria-de-vino-de-mesa-4917-1.jpg";

module.exports = (client, message, args) => {
    message.channel.send({
        embed: {
          color: "RED",
          title: `Aqui tiene su vino ${message.author.username}`,
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