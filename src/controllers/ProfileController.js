/*
 *This class will handle any logic that has to do with profiles.
 */

const DataManager = require('../dal/DataManager');
const profileModel = require('../dal/models/profileModel');

const _dm = new DataManager();

class ProfileController {

    profiles;
    profile;
    
    constructor() {
        // initializes thie objects properties
        this.profiles = [];
        this.profile = null;
    }

/**
 * TODO:
 * Refactor functions to call datamanager for access to db files
 */


    // find profile in profiles [] by Id
    selectProfile(profileId) {
        this.profile = this.profiles.filter(profile => profile.profileId === parseInt(profileId, 10))[0];
    }

    getProfile(profileId) {
        return this.profiles.filter(profile => profile.profileId === parseInt(profileId, 10))[0];
    }

    getProfiles(){
        return _dm.getProfiles()
    }

    // add new profileModel to profiles []
    addProfile(profileArr, profileId, rank) {
        this.profiles.push(new profileModel(profileArr, profileId, rank));
    }

    // remove profileModel from profiles []
    removeProfile(profileId) {
        this.profiles = this.profiles
        .filter(profile => profile.profileId !== parseInt(profileId, 10));
    }

    // calls datamanager to save a profile
    createProfile(user) {
        _dm.createProfile(user)
    }
}

module.exports = ProfileController;