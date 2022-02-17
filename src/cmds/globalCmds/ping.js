const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;
module.exports = 
{
  category: 'global'
  ,description: 'Check the ping of the bot.'
  ,slash: true
  ,testOnly: true

  ,callback: async ({ interaction }) => {
    interaction.reply('Fetching..')
    const msg = await interaction.fetchReply();
    interaction.editReply(`VMG's ping is: \`${msg.createdTimestamp - interaction.createdTimestamp}ms\``);
  }
}