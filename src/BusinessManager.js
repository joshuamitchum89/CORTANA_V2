const profileBM = require('./models/profileBM')
const queueBM = require('./models/queueBM')
const matches = require('./models/matchBM')

class BusinessManager
{
    users = []
    matches = []
    queues = []

    addUser(user)
    {
        this.users.push(user)
        return this.users
    }


    
    // NOT TESTED!
    createQueue()
    {
        // should create a new queueBM and push it into the queues array
        // only if there are 8 players in the users array
        // return new queueBM = {
        //     active: true
        //     ,players: users
        //     , queueId: '19392810092'
        //     };
    }

    getQueueById(queueId)
    {
        // Logic for returning queue by queueId
    }
}

module.exports = BusinessManager;