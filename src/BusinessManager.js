/**
 * Handles all logic between business models and calls 
 * upon DataManager to save profile changes from operations
 * preformed of these models:
 * 
 * queueBM
 * profileBM
 * matcheBM
 */

const queueBM = require('../src/models/queueBM')
const matchBM = require('../src/models/matchBM')
const profileBM = require('../src/models/profileBM')
const DataManager = require('../src/DataManager')