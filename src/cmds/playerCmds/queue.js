const DiscordJS = require('discord.js');
const { ProfilingLevel } = require('mongodb');
const { MessageEmbed } = DiscordJS;

/*
TODO:
    Route to BusinessManager.js class to handle these:
   | Require queueBM class
   | Create new queueBM object if there isn't one already
   | Save the queueBM object in json format in /persistence/queues.json
   | Store players in that queueBM object
   | Build saveQueue function
   | Build getQueues function
   
Change requestHandler to build a response based on the queues inside queues.json

Current functionality is when /queue is called an interaction is made and our requestHandler decides
how to build a reponse based on the conditional of if the user is already in the players array or not.
*/

var players = []

module.exports = {
    category: 'Testing'
    ,description: 'Sends an embed'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

    , callback: async ({ interaction }) => {
        requestHandler(interaction)
    }
}

function requestHandler(interaction){
    const user = interaction.user
    var isEphemeral = false

    if (!players.includes(user)){
        players.push(user)
        message = `${user}` + ", you've been added to the queue."
        }
    else {
        isEphemeral = true
        message = `${user}` + ", you're already in a queue."
        }

    buildResponse(interaction, message, isEphemeral)
}

function buildResponse(interaction, message, ephemeral){
    const embed = initUserInfoEmbed(players.join('\n'), message)
    interaction.reply({embeds: [embed], ephemeral})
}

function initUserInfoEmbed(player, message)
{
    const embed = new MessageEmbed()
    .setTitle("Rank 1 Queue")
    .addField("Player Status", message)
    .addField("Players:", `${player}`)
    .setColor('RED')

    return embed
}
