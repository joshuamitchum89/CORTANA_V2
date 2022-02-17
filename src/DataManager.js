const mongoose = require('mongoose')
const profileDO = require('./models/profileDM')
const dotenv = require('dotenv')
dotenv.config()

/* This class will define db calls to be used by the DataManager */

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
            await new profileDO({
                userName: username
                ,userID : userId
                ,mmr: 0
                ,wins: 0
                ,losses: 0
            }).save()
        }, 1000)
    }
}

module.exports = DataManager;