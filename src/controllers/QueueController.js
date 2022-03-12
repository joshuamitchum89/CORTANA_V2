/*
*This class will handle any logic that has to do with queues.
*/

const DataManager = require('../dal/DataManager');

const _dm = new DataManager()
 
class QueueController {

  constructor() {

  }

/**
 * TODO:
 * Apply business rules for queues in this controller!
 */
 
  async createQueue(interaction, rank) {
    var fileExists = await _dm.checkFileExists(_dm.queuesJSON)
    var queue = null
    var isEphemeral = false
    var message = " "
    if(!fileExists){
      console.log('File did not exist.')
      await _dm.createQueue(interaction, rank)
      queue = _dm.getQueueByRank(rank)
      message = "Created queue."
    }
    else {
      queue = _dm.getQueueByRank(rank)
      if(queue){
        isEphemeral = true
        message = "Queue already found for this rank. Try /join."
      }
      if(!queue){
        await _dm.createQueue(interaction, rank)
        queue = _dm.getQueueByRank(rank)
        message = "Created queue."
      }
    }
    return { queue, message, isEphemeral }
  }


  async joinQueue(user, rank) {
    var queue = await _dm.getQueueByRank(rank)
    var profile = await _dm.getProfileById(user.id)
    var isEphemeral = false
    var message = " "
    var found = false
    queue.players.forEach((player) => {
      if(player.userName === profile.userName) {
        isEphemeral = true
        found = true
      }})
      if(found) {
        message = "You are already in this queue."
        
      } else {        
        queue = await _dm.joinQueue(user, rank)
        message = "Successfully joined this queue."
      }
      
    return { queue, message, isEphemeral }
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));


module.exports = QueueController;

