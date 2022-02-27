const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;
const ProfileController = require('../../controllers/ProfileController')
const profileController = new ProfileController();

/**
 *  Creates a profile in database based on your username and id
 */

module.exports = {
    category: 'Testing'
    ,description: 'Enters profile into DB'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

    

, callback: async ({ interaction }) => {
    profileController.createProfile(interaction.user)
    const embed = initUserInfoEmbed(`${interaction.user.username}`)
    interaction.reply({embeds: [embed]})
    }
}

function initUserInfoEmbed(username)
{
    const embed = new MessageEmbed()
    .setDescription(username + " You have been entered into the DB.")
    .setAuthor('CORTANA 2.0')
    .setColor('RED')

    return embed
}