const images = "https://www.clikisalud.net/wp-content/uploads/2018/08/presencia-de-azucar-en-el-vino.jpg";

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