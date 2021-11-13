const { default: fetch } = require("node-fetch");
const riot_key = process.env.RGAPI
module.exports = async (client, message, args) => {
  const maintenances = [
    {
      "created_at": "2021-11-12T20:09:13.005790+00:00",
      "archive_at": "2021-11-22T19:59:00+00:00",
      "updates": [
      {
      "created_at": "2021-11-12T20:09:13.196240+00:00",
      "publish_locations": [
      "game",
      "riotclient",
      "riotstatus"
      ],
      "author": "Riot Games",
      "id": 6296,
      "updated_at": "2021-11-12T20:09:00+00:00",
      "translations": [
      {
      "locale": "en_US",
      "content": "We have disabled transfers while we prepare for the end of the ranked season."
      },
      {
      "locale": "cs_CZ",
      "content": "Během příprav na konec hodnocené sezóny jsme vypnuli převody účtů."
      },
      {
      "locale": "de_DE",
      "content": "Wir haben die Transfers als Vorbereitung auf das Ende der Ranglisten-Saison deaktiviert."
      },
      {
      "locale": "el_GR",
      "content": "Απενεργοποιήσαμε τις μεταφορές ενώ προετοιμαζόμαστε για το τέλος της σεζόν κατάταξης."
      },
      {
      "locale": "en_AU",
      "content": "We have disabled transfers while we prepare for the end of the ranked season."
      },
      {
      "locale": "en_GB",
      "content": "We have disabled transfers while we prepare for the end of the ranked season."
      },
      {
      "locale": "es_AR",
      "content": "Inhabilitamos las transferencias mientras nos preparamos para el final de la temporada clasificatoria."
      },
      {
      "locale": "es_ES",
      "content": "Hemos desactivado las transferencias de cuenta mientras nos preparamos para el final de la temporada clasificatoria."
      },
      {
      "locale": "es_MX",
      "content": "Inhabilitamos las transferencias mientras nos preparamos para el final de la temporada clasificatoria."
      },
      {
      "locale": "fr_FR",
      "content": "Nous avons désactivé les transferts, le temps de préparer la fin de la saison classée."
      },
      {
      "locale": "hu_HU",
      "content": "A rangsorolt szezon előkészítésének idejére letiltottuk az átviteleket."
      },
      {
      "locale": "it_IT",
      "content": "Abbiamo disattivato i trasferimenti in vista della fine della stagione classificata."
      },
      {
      "locale": "ja_JP",
      "content": "ランクシーズン終了に向けた準備のため、現在アカウント移行を停止しています。"
      },
      {
      "locale": "pl_PL",
      "content": "W okresie przygotowań do końca sezonu rankingowego transfery są wyłączone."
      },
      {
      "locale": "ro_RO",
      "content": "Am dezactivat transferurile în timp ce ne pregătim pentru finalul sezonului ranked."
      },
      {
      "locale": "ru_RU",
      "content": "Пока мы готовимся к окончанию рангового сезона, переносы временно отключены."
      },
      {
      "locale": "tr_TR",
      "content": "Dereceli sezonun sonuna hazırlanmak için hesap aktarımlarını devre dışı bıraktık."
      }
      ],
      "publish": true
      }
      ],
      "platforms": [
      "windows",
      "macos",
      "android",
      "ios"
      ],
      "id": 3980,
      "updated_at": null,
      "maintenance_status": "in_progress",
      "titles": [
      {
      "locale": "en_US",
      "content": "Transfers Disabled"
      },
      {
      "locale": "cs_CZ",
      "content": "Deaktivace převodů"
      },
      {
      "locale": "de_DE",
      "content": "Transfers deaktiviert"
      },
      {
      "locale": "el_GR",
      "content": "Οι μεταφορές είναι απενεργοποιημένες"
      },
      {
      "locale": "en_AU",
      "content": "Transfers Disabled"
      },
      {
      "locale": "en_GB",
      "content": "Transfers Disabled"
      },
      {
      "locale": "es_AR",
      "content": "Transferencias inhabilitadas"
      },
      {
      "locale": "es_ES",
      "content": "Transferencias desactivadas"
      },
      {
      "locale": "es_MX",
      "content": "Transferencias inhabilitadas"
      },
      {
      "locale": "fr_FR",
      "content": "Transferts désactivés"
      },
      {
      "locale": "hu_HU",
      "content": "Az áthelyezési szolgáltatás le van tiltva"
      },
      {
      "locale": "it_IT",
      "content": "Trasferimenti disattivati"
      },
      {
      "locale": "ja_JP",
      "content": "アカウント移行の停止"
      },
      {
      "locale": "pl_PL",
      "content": "Transfery wyłączone"
      },
      {
      "locale": "ro_RO",
      "content": "Transferuri dezactivate"
      },
      {
      "locale": "ru_RU",
      "content": "Переносы отключены"
      },
      {
      "locale": "tr_TR",
      "content": "Hesap Aktarımları Devre Dışı"
      }
      ],
      "incident_severity": null
      }
  ]
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