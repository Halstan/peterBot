const { db } = require('../../firebase')

module.exports = async (client, message, args) => {
    const member = message.guild.member(message.author)
    texto = args.join(" ");
    try {
        const res = await db.collection('eventos').add({
            creadoPor: member.nickname,
            titulo: texto,
            fechaCreacion: new Date(),
            isDone: false
        })
        const data = (await res.get()).data()
        await message.channel.send(`${data.creadoPor} dice ${data.titulo}`)
    } catch (error) {
        message.channel.send(`Ocurrio un error ${error}`)
    }
}