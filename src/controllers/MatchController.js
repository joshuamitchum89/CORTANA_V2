/*
 *Send queue objects here after being filled with players
 *so the matchmaking process can start.
 */

 const DataManager = require('../dal/DataManager')
 const matchModel = require('../dal/models/matchModel')
 
 const _dm = new DataManager();
 
 class MatchController {
     
     constructor(){
 
     }
 
 /**
  * TODO:
  * Refactor functions to call datamanager for access to json files
  */
 
   // find match in matchs by id
   selectMatch(matchId) {
     return _dm.getMatchById(matchId)
   }
 
   // returns all matchs
   getMatches(){
     _dm.getMatches()
   }
 
   // return a match by rank
   getMatchByRank(matchId){
     return _dm.getMatchById(matchId)
   }
 
   // remove match by id
   removeMatch(matchId) {
 
   }
 }
 
 module.exports = MatchController;