module.exports = (client) => {
    client.user.setPresence({
        activity: {
            name: `!help | Estoy enamorado de madam`,
            type: 'PLAYING'
          },
          status: 'online'
    });
}