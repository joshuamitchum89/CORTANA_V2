const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;
const Router = require('../../Router')

/*
 *  Creates a profile in database based on your username and id and returns an embed of that profile.
 *  Also a status msg that says if you were already in the database or if it created you a profile.
 */

module.exports = {
    name: 'createprofile'
    ,category: 'Admin'
    ,description: 'Enters profile into DB'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

, callback: async ({ interaction }) => {
    const category = 'Admin'
    const name = 'createprofile'
    const router = new Router()
    const response = await router.Route(interaction, category, name)
    console.log(response.profile)
    buildResponse(interaction, response)
    }
}

function buildResponse(interaction, response){
    const embed = initEmbed(response.profile, response.message)
    interaction.reply({embeds: [embed]})
}

function initEmbed(profile, message)
{
    const embed = new MessageEmbed()
    .setAuthor(profile.userName)
    .setColor('RED')
    formatPlayerField(profile, embed)
    .addField('Status: ',  message, inline = true)
    return embed
}

function formatPlayerField(profile, embed){
    return embed.addField('Profile : ', 
    'Username: ' + `${profile.userName}` + '\n'
    + 'MMR: ' + `${profile.mmr}` + '\n'
    + 'Wins: ' + `${profile.wins}` + '\n' 
    + 'Losses: ' + `${profile.losses}` + '\n'
    + 'Rank: ' + `${profile.rank}` + '\n'
    + 'Emblem: ' + `${profile.emblem}` + '\n'
    + 'Gamer Tag: ' + `${profile.gamerTag}` + '\n'
    , inline = true
    )
}