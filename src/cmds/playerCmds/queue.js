const QueueController = require('../../controllers/QueueController');
const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS

const queueController = new QueueController();
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
