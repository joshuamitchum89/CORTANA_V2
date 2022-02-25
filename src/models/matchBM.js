class matchBM
{
    isActive
    map
    gameType
    teams = []
    rank
    matchId
    players = [] // list of profileBM objects
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