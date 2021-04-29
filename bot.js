const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');

//const NODE_ENV = process.env.NODE_ENV || 'development'

require('dotenv').config();

client.commands = new Discord.Collection();

for(const file of readdirSync('./src/commands')){
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3);

        let fileContents = require(`./src/commands/${file}`);

        client.commands.set(fileName, fileContents);
    }
}

for (const file of readdirSync('./src/events')) {
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3);

        let fileContents = require(`./src/events/${file}`);

        client.on(fileName, fileContents.bind(null, client));

        delete require.cache[require.resolve(`./src/events/${file}`)];
    }
}

client.login(process.env.TOKEN)
    .then(() => {
        console.log(`Estoy listo, soy ${client.user.tag}`);
    })
    .catch((err) => {
        console.error(`Error al iniciar sesión ${err}`);
    });