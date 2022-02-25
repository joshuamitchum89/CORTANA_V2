class queueBM
{
    isActive
    rank
    queueId
    players = [] // list of profileBM objects
    constructor(playerArr, interactionId, rank)
    {
        this.players = playerArr
        this.isActive = true
        this.queueId = interactionId
        this.rank = rank
    }
    
    toggleIsActive(){
        this.isActive = !this.isActive;
    }
}
module.exports = queueBM;