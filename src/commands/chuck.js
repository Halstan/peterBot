const { default: fetch } = require("node-fetch");
const translate = require("translate");

module.exports = async (client, message, args) => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json();
        try {
            const res = await translate(data.value, { to: 'es', engine: 'google', key: process.env.TRANSLATE_TOKEN});
            await message.channel.send({
                embed: {
                    thumbnail: {
                        url: data.icon_url,
                    },
                    color: 'DARK_GOLD',
                    fields: [
                        {
                            name: "Chuck-chiste",
                            value: res
                        }
                    ],
                    timestamp: new Date()
                },
            })
        } catch (error) {
            message.channel.send('Error al traducir');
        }
    } catch (error) {
        message.channel.send('Error al hacer la peticion');
    }
}