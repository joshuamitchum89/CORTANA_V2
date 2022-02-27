/*
 *This class will handle any logic that has to do with queues.
 */

 const DataManager = require('../dal/DataManager');
 const queueModel = require('../dal/models/queueModel');
 
 const _dm = new DataManager();
 
 class QueueController {
   constructor() {
     this.queues = [];
     this.queue = null;
   }
   
   selectQueue(queueId) {
     this.queue = this.queues.filter(queue => queue.queueId === parseInt(queueId, 10))[0];
   }

   getQueues(){
     return this.queues;
   }
 
   addQueue(playerArr, queueId, rank) {
     this.queues.push(new queueModel(playerArr, queueId, rank));
   }
 
   removeQueue(queueId) {
     this.queues = this.queues
       .filter(queue => queue.queueId !== parseInt(queueId, 10));
   }

   addPlayer(player, queue) {
     if (!player) return;
     queue.addPlayer(player);
   }
 
   removePlayer(player, queueId) {
     const Queue = this.queues
     .filter(queue => queue.id === parseInt(queueId, 10))[0];
     Queue.removePlayer(player);
   }
 }

module.exports = QueueController;