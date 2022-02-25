// Should mimic the profileDM (DM = Data Model, BM = Business Model)

/**
 * Class can be made a worked with then after all business logic
 * is handled we transfer the values of the instance of this object
 * and over to an instance of a profileDM object and save it in the
 * data access layer of code.
 */

class profileBM {
    userName
    userId
    mmr
    wins
    losses
    // when a new profileBM is made it 
    // requires a profile object from the db
    // to copy over properties.
    constructor(profile){
        this.userName = profile.userName
        this.userId = profile.userId
        this.mmr = profile.mmr
        this.wins = profile.wins
        this.losses = profile.losses
    }

    // Methods for manipulating object properties go here
}
module.exports = profileBM;