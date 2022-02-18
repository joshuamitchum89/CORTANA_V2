const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;
const BusinessManager = require('../../BusinessManager')

const _bm = new BusinessManager()
 

module.exports = {
    category: 'Testing'
    ,description: 'Sends an embed'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

    , callback: async ({ interaction }) => {
        const embed = initUserInfoEmbed(interaction.user.id, interaction.user.username)
        interaction.reply({embeds: [embed]})
    }
}

function initUserInfoEmbed(userId, username)
{
    const embed = new MessageEmbed()
    .setDescription(userId)
    .setAuthor(username)
    .setColor('RED')

    return embed
}