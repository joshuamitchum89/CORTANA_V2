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
        // var arr = []
        // const user = interaction.user
        // arr.push(interaction.user.username)
        // var userNames = [];
        // for(var x in arr)
        // {
        //     userNames.push(arr[x]);
        // }
        var playerArr = _bm.join(interaction.user)
        console.log(playerArr)
        // const userNames = []
        // for (var x in _bm.profileArr)
        // {
        //     userNames.push()
        // }
        // const embed = initUserInfoEmbed(interaction.user.id, `${userNames.join("\n")}`)
        // interaction.reply({embeds: [embed]})

        // interaction.reply({embed: [embed]})
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