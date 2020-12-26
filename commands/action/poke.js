const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'poke',
  aliases: [],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'Poke your friends!',
  examples: [ 'poke @user' ],
  parameters: [ 'User Mention' ],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.poke();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`Action Commands | \©️${new Date().getFullYear()} Mai`);

    if (!message.mentions.members.size){

      return message.channel.send(`<:cancel:767062250279927818> | ${message.author}, who am I supposed to poke?`);

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.channel.send(
        embed.setDescription('I\'m already here! Need something?')
      );

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(`<:cancel:767062250279927818> | No!`);

    } else {

      return message.channel.send(
        embed.setDescription(`${message.member} poked ${args[0]}`)
      );

    };
  }
};
