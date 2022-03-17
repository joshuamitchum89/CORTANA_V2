class matchModel
{
    isActive
    map
    gameType
    teamA
    teamB
    aCapt
    bCapt
    rank
    matchId
    players = []
    maps 
    gameTypes 
    constructor(playerArr, id, rank)
    {
        this.gameTypes = ["Slayer", "Capture the Flag", "Oddball", "Strongholds"]
        this.maps = ["Recharge", "Streets", "Live Fire", "Aquarius", "Bazaar"]
        this.players = playerArr
        this.isActive = true
        this.match = id
        this.rank = rank
        this.matchId = id
        this.map = this.maps[Math.floor(Math.random() * 5)];
        this.aCapt = this.players[Math.floor(Math.random() * 8)];
        this.bCapt = this.players[Math.floor(Math.random() * 8)];
        this.gameType = this.gameTypes[Math.floor(Math.random() * 4)];
        while(this.aCapt.userName === this.bCapt.userName) {
            this.bCapt = this.players[Math.floor(Math.random() * 8)];
        }
        
        
    }

    //returns a random number between 0 and num exclusive
    
    
    
    // Build random map function
    
    
    // Build random gameType function
    

    
}
module.exports = matchModel;