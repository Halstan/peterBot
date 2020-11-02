module.exports = (client, member) => {
  const bienvenida = process.env.BIENVENIDA;
    member.guild.channels.cache.get(bienvenida)
    .canal.send({
        embed: {
          color: 'GREEN',
          title: `Bienvenido ${member.user.username} a ${member.guild.name}`,
          thumbnail: {
            url: member.user.displayAvatarURL()
          },
          timestamp: new Date()
        }
      })
    console.log(bienvenida);
}