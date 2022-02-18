class queueBM
{
    #isActive
    queueId
    players = []
    constructor(playerArr, interactionId)
    {
        this.players = playerArr
        this.#isActive = true
        this.queueId = interactionId
    }

    getPlayers()
    {
        return this.players
    }

    getQueueId()
    {
        return this.queueId
    }
}
module.exports = queueBM;