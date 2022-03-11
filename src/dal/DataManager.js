const mongoose = require('mongoose')
const dotenv = require('dotenv');
const profileModel = require('./models/profileModel.js');
const queueModel = require('./models/queueModel.js');
const fs = require('fs');
dotenv.config()

/* Handles any database calls */

class DataManager {
    #connectionString;
    constructor() {
        this.#connectionString = process.env.URI;
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

    async createQueue(user, interactionId, rank) {
        // checkFilesExists()
        // if not create file queues.json and add queue
        // if so add queue
        const profile = await this.getProfileById(user.id)
        const queue = new queueModel(profile, interactionId, rank)
        this.saveJSON('queues.json', queue);
        // const jsonQueue = JSON.stringify(queue)
        // fs.writeFile('queues.json', jsonQueue, err => {
        //     if (err) {
        //         throw err;
        //     }
        // })
    }

    async joinQueue(user, interactionId, rank) {
        const selectedQueue = this.getQueueByRank(rank)
        var profile = new profileModel()
        profile = await this.getProfileById(user.id)
        selectedQueue.players.push(profile)
        this.saveJSON('queues.json', selectedQueue);
        // const jsonQueue = JSON.stringify(selectedQueue)
        // fs.writeFile('queues.json', jsonQueue, err => {
        //     if (err) {
        //         throw err;
        //     }
        // })
        return selectedQueue
    }


    getQueues() {
        const queues = []
        queues.push(JSON.parse(fs.readFileSync('queues.json')))
        return queues
    }

    getQueueByRank(rank) {
        const queues = []
        queues.push(JSON.parse(fs.readFileSync('queues.json')))
        const selectedQueue = queues.find(queue => { return queue.rank === rank })
        return selectedQueue
    }

    getQueueById(id) {
        const queues = []
        queues.push(JSON.parse(fs.readFileSync('queues.json')))
        const selectedQueue = queues.find(queue => { return queue.queueId === id })
        return selectedQueue
    }
}

module.exports = DataManager;