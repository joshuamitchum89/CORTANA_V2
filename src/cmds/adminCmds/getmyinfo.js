const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;


/**
 * Returns the user that uses this cmd
 */

module.exports = {
    category: 'Testing'
    ,description: 'Sends an embed'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

    , callback: async ({ interaction }) => {

        buildResponse(interaction)
    }
}

function buildResponse(interaction){
    const embed = initUserInfoEmbed(`${interaction.user}`)
    interaction.reply({embeds: [embed]})
}

function initUserInfoEmbed(player)
{
    const embed = new MessageEmbed()
    .setDescription(player)
    .setColor('RED')

    return embed
}