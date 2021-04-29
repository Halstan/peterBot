const { default: fetch } = require("node-fetch");

module.exports = (client, message, args) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {
            let value = data.value
            message.channel.send({
                embed: {
                    color: 'DARK_GOLD',
                    fields: [
                        {
                            name: "Chuck joke",
                            value: value
                        }
                    ],
                    timestamp: new Date()
                }
            })
        });
}