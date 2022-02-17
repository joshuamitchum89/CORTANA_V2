const profileBM = require('./models/profileBM')
const queueBM = require('./models/queueBM')
const matches = require('./models/matchBM')

class BusinessManager
{
    profiles = []
    matches = []
    queues = []

    join(user)
    {
        this.profiles.push(user.username)
        return this.profiles
    }

    getQueueById(queueId)
    {
        // Logic for returning queue by queueId
    }
}

module.exports = BusinessManager;