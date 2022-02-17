const DiscordJS = require('discord.js')
const dotenv = require('dotenv')
const WOKCommands = require('wokcommands')
const path = require('path')
const DataManager = require('./DataManager')
const { deflateSync } = require('zlib')
const { Intents, MessageEmbed } = DiscordJS

dotenv.config()
const _dm = new DataManager()
const client = new DiscordJS.Client({
    intents: 
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

InitCORTANA()

/* Initializes CORTANA.V2 */
function InitCORTANA()
{
    client.on('ready', async x => 
    {
        
        const cmdsDir = path.join(__dirname, 'cmds')
        const testServers = ['934905816719446016']
        _dm.connectDB()
        InitWOKCommands(cmdsDir, testServers)
    })
}

/* Initializes WOKCommand handler */
function InitWOKCommands(cmdsDir, testServers)
{
    new WOKCommands(client, 
    {
        commandDir: cmdsDir
        ,testServers: testServers
    })
}

client.login(process.env.TOKEN)