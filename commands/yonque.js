const images = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Botella_de_Aguardiente_Antioque%C3%B1o.jpg/200px-Botella_de_Aguardiente_Antioque%C3%B1o.jpg";

module.exports = (client, message, args) => {
    message.channel.send({
        embed: {
          color: "WHITE",
          title: `Aqui tiene su yonquesito ${message.author.username}`,
          author: {
            name: message.author.username,
            iconURL: message.author.displayAvatarURL(),
          },
          description: "Sirvase y disfrute.",
          timestamp: new Date(),
          fields: [
            {
              name: "Hipijili",
              value: "Brindis",
            }
          ],
          image: {
            url: images,
          },
        },
      });
}