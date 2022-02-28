class queueModel
{
    isActive
    rank
    queueId
    players
    constructor(interactionId, rank)
    {
        this.isActive = true
        this.rank = rank
        this.queueId = interactionId
        this.players = []
    }
}
module.exports = queueModel;