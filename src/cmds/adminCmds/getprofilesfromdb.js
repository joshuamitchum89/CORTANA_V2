const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;
const Router = require('../../Router')

module.exports = {
    category: 'Gets profiles from DB'
    ,description: 'Sends an embed'
    ,slash: true
    ,testOnly: true
    ,permissions: ['ADMINISTRATOR']


    , callback: async ({ interaction }) => {
        requestHandler(interaction)
    }
}

async function requestHandler(interaction){
    const category = 'Admin'
    const name = 'getprofiles'
    const router = new Router()
    const response = await router.Route(interaction, category, name)
    buildResponse(interaction, response)
}

function buildResponse(interaction, response){
    const embed = initEmbed(response)
    interaction.reply({embeds: [embed]})
}

function initEmbed(profiles)
{
    const mappedProfiles = mapProfiles(profiles)
    const embed = new MessageEmbed()
    .setAuthor('CORTANA 2.0')
    .setColor('RED')
    formatPlayerFields(mappedProfiles, embed)
    return embed
}

function mapProfiles(profiles){
    const mappedProfiles = profiles.map(profile => {
        return { player: profile.userName, mmr: profile.mmr, wins: profile.wins, losses: profile.losses }
    })
    return mappedProfiles
}

function formatPlayerFields(mapppedProfiles, embed){
    return mapppedProfiles.forEach(profile => {
        embed.addField('Player in DB: ', 
        'Username: ' + `${profile.player}` + '\n'
        + 'MMR: ' + `${profile.mmr}` + '\n'
        + 'Wins: ' + `${profile.wins}` + '\n' 
        + 'Losses: ' + `${profile.losses}`)
    });
}