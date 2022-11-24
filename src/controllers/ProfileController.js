/*
 *This class will handle any logic that has to do with profiles.
 */

const DataManager = require('../dal/DataManager');
const profileModel = require('../dal/models/profileModel');

const _dm = new DataManager();

class ProfileController {

    constructor() {

    }

/**
 * TODO:
 * Refactor functions to call datamanager for access to db files
 */

    getProfileById(id) {
        return _dm.getProfileById(id);
    }

    getProfiles(){
        return _dm.getProfiles()
    }

    removeProfile(id) {
        // call _dm to remove profile based on profile id if exists
    }

    async createProfile(user) {
        var profile = await _dm.getProfileById(user.id)
        var message = " "
        if(profile){
            message = "Found profile in database."
        }
        if(!profile){
            _dm.createProfile(user)
            await delay(1000)
            profile = await _dm.getProfileById(user.id)
            message = "Added profile to database."
        }
        return { profile, message }
    }

    updateProfile(profile){
        
    }

    updateMMR(profile, newMMR){
        profile.mmr = newMMR
        // ALGO for rank
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = ProfileController;