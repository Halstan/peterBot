const images = "https://www.corporacionliderperu.com/shop/31766-large_default/ron-cartavio-x-250-ml-blanco.jpg";

module.exports = (client, message, args) => {
    message.channel.send({
        embed: {
          color: "BLACK",
          title: `Aqui tiene su ron ${message.author.username}`,
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