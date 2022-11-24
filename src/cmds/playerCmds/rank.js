const DiscordJS = require('discord.js');
const Router = require('../../Router');
const { MessageEmbed } = DiscordJS;

// Return player stats for user that uses this cmd

module.exports = {
  category: 'Testing'
  ,description: 'Sends an embed'
  ,slash: true
  ,testOnly: true
  ,permissions: ['ADMINISTRATOR']

  , callback: async ({ interaction }) => {
    requestHandler(interaction)
  }
}

// Format embed

async function requestHandler(interaction){
  const category = 'General'
  const name = 'rank'
  const router = new Router()
  const response = await router.Route(interaction, category, name)
  buildResponse(interaction, response)
}

function buildResponse(interaction, response){
  const embed = initUserInfoEmbed(response)
  interaction.reply({embeds: [embed]})
}

function initUserInfoEmbed(user)
{
  const embed = new MessageEmbed()
  .setColor('RED')
  formatPlayerFields(user, embed)
  return embed
}

function formatPlayerFields(profile, embed){
  embed.addField('Stats: ', 
  'Username: ' + `${profile.userName}` + '\n'
  + 'MMR: ' + `${profile.mmr}` + '\n'
  + 'Wins: ' + `${profile.wins}` + '\n' 
  + 'Losses: ' + `${profile.losses}`)
}