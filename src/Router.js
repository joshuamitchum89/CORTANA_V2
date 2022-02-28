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
//RANK 1 is hardcoded.
  Route(interaction, category, cmdName){
    switch (category) {
      case 'Queue':
        switch (cmdName) {
          case 'queue':
            this.queueController.addQueue(interaction.id, 1)
            break;
          case 'join':
            this.queueController.addPlayer(this.profileController.getProfile(interaction.user.id), this.queueController.getQueue(1))
            break;
          case 'leave':
            this.queueController.removePlayer(this.profileController.getProfile(interaction.user.id), this.queueController.removePlayer(1))
            break;
        }

      case 'Admin':
        switch (cmdName) {
          case 'createprofile':
            this.profileController.createProfile(interaction.user)
            break;
          case 'getprofiles':
            const profiles = this.profileController.getProfiles()
            // console.log(profiles)
            return profiles;
          case 'removeprofile':
            break;
        }
    }
  }
}

module.exports = Router;