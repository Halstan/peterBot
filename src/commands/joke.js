const fetch = require('node-fetch');

module.exports = async (client, message, args) => {
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
            await message.channel.send({
                embed: {
                    color: 'LUMINOUS_VIVID_PINK',
                    title: `Categoria ${body.category}`,
                    fields: [
                        {
                            name: body.type.toUpperCase(),
                            value: body.as
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