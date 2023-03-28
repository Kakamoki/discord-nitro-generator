const Discord = require("discord.js");
const client = new Discord.Client();

const generator = require("generate-password");
const config = require("./config.js");

        const embed12 = new Discord.RichEmbed()
  .setTitle("Nitro :")
  .setColor(0x7289DA)
  .setDescription("🚀 Nitro code Gen regarder vos dm!")
  .setFooter("Nitro Gen by On Nxyako")

client.login(config.token);

client.on('ready', () => {
  console.log(`${client.user.username} starting...`);
  console.log(`Serving ${client.guilds.size} guilds.`);
  console.log(`${client.users.size} users`);
});

const getFake = () => {
    let nitrocode = generator.generate({ length: 16, numbers: true });
    return `https://discord.gift/${nitrocode}`;
};

client.on("message", (message) => {

    if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.author.createDM().then((channel) => channel.send(getFake()));
      //message.channel.send(getFake());
      message.author.createDM().then((channel) => channel.send(getFake()));
      message.channel.send(embed12);
});

client.login(config.token);
