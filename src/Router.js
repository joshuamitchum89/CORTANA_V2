/*
 *This class will route the incoming request to the corresponding controller class
 *and build and return a response to the calling cmd.
 *
 * There is a better way to route cmds however we can refactor later.
 * As for now I am going to write it all out the long way.
 */

const QueueController = require('../src/controllers/QueueController')
const MatchController = require('../src/controllers/MatchController')
const ProfileController = require('../src/controllers/ProfileController')

class Router{

  queueController;
  matchController;
  profileController;
  constructor(){
    this.queueController = new QueueController()
    this.matchController = new MatchController()
    this.profileController = new ProfileController()
  }

// 'Queue' cases do not function properly as of now.

  Route(interaction, category, cmdName){
    switch (category) {
      case 'Queue':
        switch (cmdName) {
          case 'queue':
            return this.queueController.createQueue(interaction, 1)
          case 'join':
            return this.queueController.joinQueue(interaction, 1)
          case 'leave':
            return this.queueController.leaveQueue(interaction, 1)
        }

      case 'Admin':
        switch (cmdName) {
          case 'createprofile':
            return this.profileController.createProfile(interaction.user)
          case 'getprofiles':
            return this.profileController.getProfiles()
          case 'removeprofile':
            break;
        }
      
      case 'General':
        switch (cmdName) {
          case 'rank':
            const profile = this.profileController.getProfileById(interaction.user.id)
            return profile
        }
    }
  }
}

module.exports = Router;