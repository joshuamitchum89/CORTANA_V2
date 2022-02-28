/*
 *This class will handle any logic that has to do with matches.
 */

const DataManager = require('../dal/DataManager')
const matchModel = require('../dal/models/matchModel')

const _dm = new DataManager();

class MatchController {

    matches;
    match;
    
    constructor(){
        // initializes thie objects properties
        this.matches = [];
        this.match = null;
    }

/**
 * TODO:
 * Refactor functions to call datamanager for access to json files
 */

  // find match in matchs by id
  selectMatch(matchId) {
    this.match = this.matchs.filter(match => match.matchId === parseInt(matchId, 10))[0];
  }

  // returns all matchs
  getMatchs(){
    return this.matchs;
  }
 
  // add new matchModel to matchs
  addMatch(playerArr, matchId, rank) {
    this.matchs.push(new matchModel(playerArr, matchId, rank));
  }

  // remove match by id
  removeMatch(matchId) {
    this.matchs = this.matchs
      .filter(match => match.matchId !== parseInt(matchId, 10));
  }
}

module.exports = MatchController;