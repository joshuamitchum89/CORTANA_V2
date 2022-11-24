class queueModel
{
    isActive
    rank
    queueId
    players
    constructor(user, interactionId, rank)
    {
        this.isActive = true
        this.rank = rank
        this.queueId = interactionId
        this.players = []
        this.players.push(user)
    }
}
module.exports = queueModel;