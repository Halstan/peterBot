module.exports = (client, message, args) => {
  message.channel.send({
    embed: {
      color: "BLUE",
      title: "Comandos",
      fields: [
        {
          name: "!help",
          value: "Muestra todos los comandos.",
          inline: true
        },
        {
          name: "!coñac",
          value: "Sirve una copa de coñac.",
          inline: true
        },
        {
          name: "!ron",
          value: "Sirve una copa de ron.",
          inline: true
        },
        {
          name: "!vino",
          value: "Sirve una copa de vino.",
          inline: true
        },
        {
          name: "!yonque",
          value: "Sirve un yonquesito.",
          inline: true
        },
        {
          name: "!pipo",
          value: "Me pongo a su disposición.",
          inline: true
        },
        {
          name: "!f",
          value: "Da sus respetos al usuario.",
          inline: true
        },
        {
          name: "!chuck",
          value: "Trae un chiste aleatorio de la api de Chuck Norris.",
          inline: true
        },
        {
          name: "!poke {pokemon}",
          value: "Muestra el pokemon introducido de la PokeApi.",
          inline: true
        },
        {
          name: "!digi {digimon}",
          value: "Muestra el digimon.",
          inline: true
        },
        {
          name: "!joke",
          value: 'Cuenta un chiste.',
          inline: true
        },
        {
          name: "!play {url}",
          value: "Reproduce la cancion dada (solo links de Youtube).",
          inline: true
        },
        {
          name: "!disconnect",
          value: "Desconecta al bot del chat de voz."
        },
        {
          name: "!ban",
          value: "Banea a un miembro del servidor (solo con permiso para banear miembros)."
        },
        {
          name: '!kick',
          value: 'Expulsa a un miembro del servidor (solo con permiso para expulsar miembros).'
        }
      ],
      timestamp: new Date(),
      footer: {
        text: message.author.username,
      },
    }
  });
}