const { default: fetch } = require("node-fetch");

module.exports = (client, message, args) => {
    texto = args.join(" ");
    if (!texto) return message.channel.send(`Escriba el texto a enviar`)
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${texto}`)
        .then(res => res.json())
        .then(data => {
            let name = data[0].name;
            let image = data[0].img;
            let level = data[0].level;
            message.channel.send({
                embed: {
                    color: 'DARK_AQUA',
                    title: `Digimon ${name}`,
                    author: {
                        name: message.author.username,
                        iconURL: message.author.displayAvatarURL(),
                    },
                    timestamp: new Date(),
                    fields: [
                        {
                            name: 'Nivel',
                            value: level
                        }
                    ],
                    image: {
                        url: image,
                    }
                }
            });
        }).catch(e => message.channel.send(`Este digimon no existe "${texto}"`));
}