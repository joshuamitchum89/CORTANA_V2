class matchBM
{
    isActive
    map
    gameType
    teamA
    teamB
    rank
    matchId
    players = []
    constructor(playerArr, id)
    {
        this.players = playerArr
        this.isActive = true
        this.match = id
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
module.exports = matchBM;