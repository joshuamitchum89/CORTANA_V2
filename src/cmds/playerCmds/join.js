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
        var userArr = _bm.addUser(interaction.user);
        const embed = initUserInfoEmbed(`${userArr.join('\n')}`)
        interaction.reply({embeds: [embed]})
    }
}

// NEED TO PASS DOWN A QUEUE OBJECT THAT POPULATES THIS EMBED

function initUserInfoEmbed(username)
{
    const embed = new MessageEmbed()
    .setTitle("Queue: ID") // pass in randomly generated queue id
    .setAuthor("Queue Initilizer") // whoever initiates a queue through /join
    .setDescription("__Players:__ " + "\n" +username)
    .setColor('RED')

    return embed
}