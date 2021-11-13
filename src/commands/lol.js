const { default: fetch } = require("node-fetch");
const riot_key = process.env.RGAPI
module.exports = async (client, message, args) => {
  try {
    const res = await fetch(`https://la2.api.riotgames.com/lol/status/v4/platform-data?api_key=${riot_key}`)
    const data = await res.json();
    let i = 0;
    if(data.incidents == 0) {
      message.channel.send('No hay nuevos incidentes.')
    } else {
      do {
        message.channel.send({
          embed: {
              color: 'RED',
              title: `Incidente #${i+1}`,
              description: `Severidad: ${data.incidents[i].incident_severity}`,
              thumbnail: {
                url: 'https://static.wikia.nocookie.net/leagueoflegendsoficial/images/8/8c/LOL_Logo.png/revision/latest?cb=20180119195439&path-prefix=es'
              },
              fields: [
                {
                  name: data.incidents[i].titles[1].content,
                  value: data.incidents[i].updates[0].translations[1].content
                }
              ],
              timestamp: data.incidents[i].updates[0]?.updated_at
          }
        })
        i++
      } while (i < data.incidents.length)
    }

    if(data.maintenances.length < 0){
      message.channel.send("No hay mantenimiento en curso.");
    } else {
      do {
        const title = data.maintenances[i].titles.find(el => el.locale == "es_AR");
        const update = data.maintenances[i].updates[i].translations.find(el => el.locale == "es_AR")
        message.channel.send({
          embed: {
            color: 'YELLOW',
            title: `Mantenimiento #${i+1}`,
            description: `Severidad: ${data.maintenances[i].incident_severity}`,
            thumbnail: {
              url: 'https://static.wikia.nocookie.net/leagueoflegendsoficial/images/8/8c/LOL_Logo.png/revision/latest?cb=20180119195439&path-prefix=es'
            },
            fields: [
              {
                name: `${title["content"]}`,
                value: `${update["content"]}`
              }
            ],
            timestamp: data.maintenances[i].updates[i]?.updated_at
          }
        })
      i++
      } while (i < data.incidents.length)
    }
  } catch (error) {
    message.channel.send('Hubo un error al consultar la información.')
    console.log(error);
  }
}