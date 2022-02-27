/*
 *This class will handle any logic that has to do with profiles.
 */

const DataManager = require('../dal/DataManager');
const profileModel = require('../dal/models/profileModel');

const _dm = new DataManager();

class ProfileController {

    constructor() {
        // initializes thie objects properties
        this.players = [];
        this.player = null;
    }

    // find player in players [] by Id
    selectProfile(profileId) {
        this.player = this.players.filter(player => player.profileId === parseInt(profileId, 10))[0];
    }

    // add new profileModel to players []
    addProfile(playerArr, profileId, rank) {
        this.players.push(new profileModel(playerArr, profileId, rank));
    }

    // remove profileModel from players []
    removeProfile(profileId) {
        this.players = this.players
        .filter(player => player.profileId !== parseInt(profileId, 10));
    }

    // calls datamanager to save a profile
    createProfile(user) {
        _dm.createProfile(user)
    }
}

module.exports = ProfileController;