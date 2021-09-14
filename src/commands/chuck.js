const { default: fetch } = require("node-fetch");

module.exports = async (client, message, args) => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json();
        try {
            await message.channel.send({
                embed: {
                    thumbnail: {
                        url: data.icon_url,
                    },
                    color: 'DARK_GOLD',
                    fields: [
                        {
                            name: "Chuck-chiste",
                            value: data.value
                        }
                    ],
                    timestamp: new Date()
                },
            })
        } catch (error) {
            message.channel.send('Error al traducir');
            console.log(error);
        }
    } catch (error) {
        message.channel.send('Error al hacer la peticion');
    }
}