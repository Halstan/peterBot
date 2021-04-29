const { default: fetch } = require("node-fetch");

module.exports = (client, message, args) => {
    texto = args.join(" ");
    if (!texto) return message.channel.send(`Escriba el texto a enviar`)
    fetch(`https://pokeapi.co/api/v2/pokemon/${texto}`)
        .then(res => res.json())
        .then(data => {
            let name = data.name;
            let image = data.sprites.front_default;
            let weight = data.weight;
            message.channel.send({
                embed: {
                    color: 'DARK_AQUA',
                    title: `Pokemon ${name}`,
                    author: {
                        name: message.author.username,
                        iconURL: message.author.displayAvatarURL(),
                    },
                    timestamp: new Date(),
                    fields: [
                        {
                            name: 'Peso',
                            value: weight
                        }
                    ],
                    image: {
                        url: image,
                    }
                }
            });
        }).catch(e => message.channel.send(`Este pokemon no existe "${texto}"`));
}