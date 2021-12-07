const { default: fetch } = require("node-fetch");
const riot_key = process.env.RGAPI
module.exports = async (client, message, args) => {
  try {
    const res = await fetch(`https://la2.api.riotgames.com/lol/status/v4/platform-data?api_key=${riot_key}`)
    const data = await res.json();
    let i = 0;
    let j = 0;
    if(data.incidents.length == 0) {
      message.channel.send('No hay nuevos incidentes.')
    } else {
      do {
        const title = data.incidents[i].titles.find(el => el.locale == "es_AR");
        const update = data.incidents[i].updates[0].translations.find(el => el.locale == "es_AR")
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
                  name: `${title["content"]}`,
                  value: `${update["content"]}`
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
        const title = data.maintenances[j].titles.find(el => el.locale == "es_AR");
        const update = data.maintenances[j].updates[0].translations.find(el => el.locale == "es_AR")
        console.log(data.maintenances[j].titles.find(el => el.locale == "es_AR"));
        message.channel.send({
          embed: {
            color: 'YELLOW',
            title: `Mantenimiento #${j+1}`,
            description: `Severidad: ${data.maintenances[j].incident_severity}`,
            thumbnail: {
              url: 'https://static.wikia.nocookie.net/leagueoflegendsoficial/images/8/8c/LOL_Logo.png/revision/latest?cb=20180119195439&path-prefix=es'
            },
            fields: [
              {
                name: `${title["content"]}`,
                value: `${update["content"]}`
              }
            ],
            timestamp: data.maintenances[j].updates[j]?.updated_at
          }
        })
      j++
      } while (i < data.incidents.length)
    }
  } catch (error) {
    message.channel.send('Hubo un error al consultar la información.')
    console.log(error);
  }
}