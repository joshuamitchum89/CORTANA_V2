const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;
// const ProfileController = require('../../controllers/ProfileController')
// const profileController = new ProfileController();
const Router = require('../../Router')

/**
 *  Creates a profile in database based on your username and id
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
    var router = new Router()
    var user = interaction.user
    router.Route(interaction, category, name)
    const embed = initUserInfoEmbed(user)
    interaction.reply({embeds: [embed]})
    }
}

function initUserInfoEmbed(user)
{
    const embed = new MessageEmbed()
    .setDescription(`${user}` + " You have been entered into the DB.")
    .setAuthor('CORTANA 2.0')
    .setColor('RED')

    return embed
}