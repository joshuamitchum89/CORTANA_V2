const mongoose = require('mongoose')
const dotenv = require('dotenv');
const profileModel = require('./models/profileModel.js');
dotenv.config()

/* Handles any database calls */

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

    createProfile(user)
    {
        setTimeout(async () => {
            await new profileModel({
                userName: user.username
                ,userId : user.id
                ,mmr: 0
                ,wins: 0
                ,losses: 0
            }).save()
        }, 1000)
    }

    getProfiles(){

    }

    getProfileById(id){

    }
}

module.exports = DataManager;