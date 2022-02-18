const profileBM = require('./models/profileBM')
const queueBM = require('./models/queueBM')
const matches = require('./models/matchBM')

class BusinessManager
{
    #users = []
    #matches = []
    #queues = []

    addUser(user)
    {
        this.#users.push(user)
        return this.#users
    }
    
    // NOT TESTED!
    createQueue(playerArr, interactionId)
    {
        // dev code
        if(this.#queues.length > 0)
        {
            return;
        }
        // dev code
        var queue = new queueBM(playerArr, interactionId)
        this.#queues.push(queue)
    }


    getQueues()
    {
        return this.#queues
    }

    getQueueById(queueId)
    {
        // Logic for returning queue by queueId
    }
    
    getUsers()
    {
        return this.#users
    }

    getMatches()
    {
        return this.#matches
    }

}

module.exports = BusinessManager;