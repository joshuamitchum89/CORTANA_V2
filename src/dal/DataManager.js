const mongoose = require('mongoose')
const dotenv = require('dotenv');
const profileModel = require('./models/profileModel.js');
const queueModel = require('./models/queueModel.js');
const fs = require('fs');
const matchModel = require('./models/matchModel.js');
const { Console } = require('console');
dotenv.config()

/* Handles any database calls */

class DataManager {
    #connectionString;
    queuesJSON;
    matchesJSON;
    constructor() {
        this.#connectionString = process.env.URI;
        this.queuesJSON = 'queues.json'
        this.matchesJSON = 'matches.json'
    }

    connectDB() {
        mongoose.connect(this.#connectionString, { keepAlive: true });
    }

    disconnectDB() {
        mongoose.connection.close()
    }

    getConnectionString() {
        return this.#connectionString;
    }

    createProfile(user) {
        setTimeout(async () => {
            await new profileModel({
                userName: user.username
                , userId: user.id
                , mmr: 0
                , wins: 0
                , losses: 0
                , rank: 0
                , rankRole: 0
                , emblem: ' '
                , gamerTag: ' '
            }).save()
        }, 1000)
    }

    async getProfiles() {
        // fetch all profiles
        const profiles = await profileModel.find()
        return profiles;
    }

    async getProfileById(id) {
        const profile = await profileModel.findOne({ userId: id })
        return profile;
    }

    saveJSON(filename = '', json = '""') {
        return fs.writeFileSync(filename, JSON.stringify(json, null, 2), err => {
            if (err) {
                throw err;
            }
        })
    }

    async createQueue(interaction, rank) {
        const profile = await this.getProfileById(interaction.user.id)
        const queue = new queueModel(profile, interaction.id, rank)
        this.saveJSON(this.queuesJSON, queue)
    }

    async createMatch(queue, id, rank) {
        var match = new matchModel(queue.players, id, rank)
        this.saveJSON(this.matchesJSON, match)
    }

    async checkFileExists(path){
        if(fs.existsSync(path)){
            return true
        }
        return false
    }

    async joinQueue(interaction, rank) {
        const selectedQueue = this.getQueueByRank(rank)
        var profile = new profileModel()
        profile = await this.getProfileById(interaction.user.id)
        selectedQueue.players.push(profile)
        this.saveJSON(this.queuesJSON, selectedQueue);
        return selectedQueue
    }

    async leaveQueue(interaction, rank) {
        const selectedQueue = this.getQueueByRank(rank)
        var profile = new profileModel()
        profile = await this.getProfileById(interaction.user.id)
        var filteredPlayers = selectedQueue.players.filter(player => { return player.userId !== interaction.user.id })
        selectedQueue.players = filteredPlayers
        this.saveJSON(this.queuesJSON, selectedQueue);
        return selectedQueue
    }

    getMatches() {
        const matches = []
        matches.push(JSON.parse(fs.readFileSync(this.matchesJSON)))
        return matches
    }

    getMatchByRank(rank) {
        const matches = []
        matches.push(JSON.parse(fs.readFileSync(this.matchesJSON)))
        const selectedMatch = matches.find(match => { return match.rank === rank })
        return selectedMatch
    }

    getMatchById(id) {
        const matches = []
        matches.push(JSON.parse(fs.readFileSync(this.matchesJSON)))
        const selectedMatch = matches.find(match => { return match.matchId === id })
        return selectedMatch
    }

    getQueues() {
        const queues = []
        queues.push(JSON.parse(fs.readFileSync(this.queuesJSON)))
        return queues
    }

    getQueueByRank(rank) {
        const queues = []
        queues.push(JSON.parse(fs.readFileSync(this.queuesJSON)))
        const selectedQueue = queues.find(queue => { return queue.rank === rank })
        return selectedQueue
    }

    getQueueById(id) {
        const queues = []
        queues.push(JSON.parse(fs.readFileSync(this.queuesJSON)))
        const selectedQueue = queues.find(queue => { return queue.queueId === id })
        return selectedQueue
    }
}

module.exports = DataManager;