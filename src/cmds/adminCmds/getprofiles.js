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
        const category = 'Admin'
        const name = 'getprofiles'
        const router = new Router()
        const profiles = await router.Route(interaction, category, name)
        const userNames = []
        profiles.forEach(profile => {userNames.push(profile.userName)})
        const embed = initUserInfoEmbed(userNames.join('\n'))
        interaction.reply({embeds: [embed]})
        }
    }

    // TODO: Format embed response for profiles
    
    function initUserInfoEmbed(user)
    {
        const embed = new MessageEmbed()
        .setDescription(`${user}`)
        .setAuthor('CORTANA 2.0')
        .setColor('RED')
    
        return embed
    }