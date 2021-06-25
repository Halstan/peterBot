const { default: fetch } = require("node-fetch");
const key = process.env.EX_KEY
module.exports = async (client, message, args) => {
  const text = args.splice(" ");
  try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${text[0]}`);
      const data = await res.json()
      message.channel.send({
          embed: {
            color: '#23E40C',
            title: `Valor de ${text}`,
            description: `Ult. Actualización: ${new Date(data.time_last_update_unix * 1000)
                .toLocaleString()}`,
            author: {
                name: message.author.username,
                iconURL: message.author.displayAvatarURL(),
            },
            fields: [
              {
                name: 'PEN',
                value: data.conversion_rates.PEN,
                inline: true
              },
              {
                name: 'USD',
                value: data.conversion_rates.USD,
                inline: true
              },
              {
                name: 'ARS',
                value: data.conversion_rates.ARS,
                inline: true
              },
              {
                name: 'EUR',
                value: data.conversion_rates.EUR,
                inline: true
              },
              {
                name: 'JPY',
                value: data.conversion_rates.JPY,
                inline: true
              },
              {
                name: 'CNY',
                value: data.conversion_rates.CNY,
                inline: true
              },
            ],
            timestamp: new Date(),
          }
      })
  } catch (error) {
    message.channel.send('Hubo un arror al buscar esta moneda')
  }
}