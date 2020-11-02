const fetch = require('node-fetch')

module.exports = (client, message, args) => {
    fetch('https://sv443.net/jokeapi/v2/joke/Any')
        .then(res => res.json())
        .then(data => {
            let category = data.category;
            let type = data.type;
            let as = []
            if(type == 'twopart'){
                as.push(data.setup);
                as.push(data.delivery);
            }else {
                as.push(data.joke);
            }

            message.channel.send({
                embed: {
                    color: 'LUMINOUS_VIVID_PINK',
                    title: `Categoria ${category}`,
                    fields: [
                        {
                            name: type,
                            value: as
                        }
                    ],
                    timestamp: new Date(),
                }
            });
            
        }).catch(err => {
            console.error(err)
            message.channel.send('El chiste se murio de risa')
        });
}