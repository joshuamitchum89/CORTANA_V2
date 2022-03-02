/*
*This class will handle any logic that has to do with queues.
*/

const DataManager = require('../dal/DataManager');
const queueModel = require('../dal/models/queueModel');

const _dm = new DataManager()
 
class QueueController {

  constructor() {

  }

/**
 * TODO:
 * Apply business rules for queues in this controller!
 */
 
  createQueue(user, interactionId, rank) {
    _dm.createQueue(user, interactionId, rank)
  }
}

module.exports = QueueController;