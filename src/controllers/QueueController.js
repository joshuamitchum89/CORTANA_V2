/*
 *This class will handle any logic that has to do with queues.
 */

 const DataManager = require('../dal/DataManager');
 const queueModel = require('../dal/models/queueModel');
 
 const _dm = new DataManager();
 
 class QueueController {

  queues;
  queue;

  constructor() {
    // initializes thie objects properties
    this.queues = [];
    this.queue = null;
  }

/**
 * TODO:
 * Refactor functions to call datamanager for access to json files
 */
  
  // find queue in queues by id
  selectQueue(rank) {
    this.queue = this.queues.filter(queue => queue.rank === parseInt(rank, 10))[0];
  }

  getQueue(rank){
    return this.queues.filter(queue => queue.rank === parseInt(rank, 10))[0];
  }

  // returns all queues
  getQueues(){
    return this.queues;
  }
 
  // add new queueModel to queues
  addQueue(interactionId, rank) {
    this.queues.push(new queueModel(interactionId, rank));
  }

  // remove queue by id
  removeQueue(rank) {
    this.queues = this.queues
      .filter(queue => queue.rank !== parseInt(rank, 10));
  }

  // add player to queue
  addPlayer(player, queue) {
    if (!player) return;
    queue.addPlayer(player);
  }

  // remove player from queue
  removePlayer(player, queueId) {
    const Queue = this.queues
    .filter(queue => queue.id === parseInt(queueId, 10))[0];
    Queue.removePlayer(player);
  }
}

module.exports = QueueController;