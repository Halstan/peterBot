module.exports = (client, message) => {

    if (!message.content.startsWith(process.env.PREFIX)) return;
    if (message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);
    if (!cmd) return;

    cmd(client, message, args);
}