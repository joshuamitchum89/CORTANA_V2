const mongoose = require('mongoose')
const dotenv = require('dotenv');
const profileDM = require('./models/profileDM');
dotenv.config()

/* This class will be defined to handle db calls to be used by the DataManager */

class DataManager
{
    #connectionString;
    constructor()
    {
        this.#connectionString = process.env.URI;
    }

    connectDB()
    {
        mongoose.connect(this.#connectionString, {keepAlive:true});
    }

    disconnectDB()
    {
        mongoose.connection.close()
    }

    getConnectionString()
    {
        return this.#connectionString;
    }

    createProfile(userId, username)
    {
        setTimeout(async () => {
            await new profileDM({
                userName: username
                ,userID : userId
                ,mmr: 0
                ,wins: 0
                ,losses: 0
            }).save()
        }, 1000)
    }

    getProfiles()
    {
        return mongoose.connection.collection('profiles').find()
    }
}

module.exports = DataManager;