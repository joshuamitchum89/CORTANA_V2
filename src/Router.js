/*
 *This class will route the incoming request to the corresponding controller class
 *and await a response.
 */


const QueueController = require('../src/controllers/QueueController')
const MatchController = require('../src/controllers/MatchController')
const ProfileController = require('../src/controllers/ProfileController')

const queueController = new QueueController()
const matchController = new MatchController()
const profileController = new ProfileController()