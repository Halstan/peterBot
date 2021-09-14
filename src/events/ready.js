module.exports = (client) => {
    client.user.setPresence({
        activity: {
            name: `-help | Estoy enamorado de madame`,
            type: 'LISTENING'
          },
          status: 'online'
    });
}