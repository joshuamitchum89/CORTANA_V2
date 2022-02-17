const DiscordJS = require('discord.js');
const DataManager = require('../../DataManager')
const { MessageEmbed } = DiscordJS;
const _dm = new DataManager()

module.exports = {
    category: 'Testing'
    ,description: 'Enters profile into DB'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

    

    , callback: async ({ interaction }) => {

       _dm.createProfile(interaction.user.id, interaction.user.username)
       const embed = initUserInfoEmbed(interaction.user.username)
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