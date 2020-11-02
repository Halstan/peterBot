const message = require("../events/message");

module.exports = (client, message, args) => {
    message.channel.send("Pong!");
}