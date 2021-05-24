const fetch = require('node-fetch');
const translate = require("translate");

module.exports = async (client, message, args) => {
    const config = { to: 'es', engine: 'google', key: process.env.TRANSLATE_TOKEN }
    try {
        const res = await fetch('https://sv443.net/jokeapi/v2/joke/Any')
        const data = await res.json()
        const body = {
            category: data.category,
            type: data.type,
            as: []
        }
        if (data.type == 'twopart') {
            body.as.push(data.setup)
            body.as.push(data.delivery)
        } else body.as.push(data.joke)

        try {
            let res = await translate(body.as, config);
            await message.channel.send({
                embed: {
                    color: 'LUMINOUS_VIVID_PINK',
                    title: `Categoria ${body.category}`,
                    fields: [
                        {
                            name: body.type.toUpperCase(),
                            value: res
                        }
                    ],
                    timestamp: new Date(),
                }
            })
        } catch (error) {
            message.channel.send('El chiste se tradujo a puros jajas');
        }
    } catch (error) {
        message.channel.send('El chiste se murio de risa');
    }
}