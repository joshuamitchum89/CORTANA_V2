const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;
var arr = []

module.exports = {
    category: 'Testing'
    ,description: 'Sends an embed'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

    , callback: async ({ interaction }) => {

        const user = interaction.user
        arr.push(interaction.user.username)
        var userNames = [];
        for(var x in arr)
        {
            userNames.push(arr[x]);
        }
        const embed = initUserInfoEmbed(user.id, `${userNames.join("\n")}`)
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