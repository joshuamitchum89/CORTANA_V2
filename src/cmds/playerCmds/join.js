const QueueController = require('../../controllers/QueueController');
const DiscordJS = require('discord.js');
const Router = require('../../Router');
const { MessageEmbed } = DiscordJS

module.exports = {
    category: 'Testing'
    ,description: 'Sends an embed'
    ,slash: true
    ,permissions: ['ADMINISTRATOR']

    , callback: async ({ interaction }) => {
        requestHandler(interaction)
    }
}

async function requestHandler(interaction){
    const category = 'Queue'
    const name = 'join'
    const router = new Router()
    const response = await router.Route(interaction, category, name)
    console.log(response)
    console.log(response.queue.players)
    buildResponse(interaction, response)
}

function buildResponse(interaction, response){
    const embed = initEmbed(response)
    interaction.reply({embeds: [embed], ephemeral: response.isEphemeral })
}

function initEmbed(response)
{
    const players = []
    response.queue.players.forEach(player => players.push(player.userName))
    const embed = new MessageEmbed()
    .setTitle("Rank " + response.queue.rank + " Queue")
    .setDescription(response.message)
    .addField("Players in Queue: ", `${players}`)
    .setColor('GREEN')
    return embed
}