const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;

/**
 * TODO:
 * getProfiles()
 * build response upon these profiles
 */

module.exports = {
    category: 'Gets profiles from DB'
    ,description: 'Sends an embed'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']


    , callback: async ({ interaction }) => {
        

    }
}