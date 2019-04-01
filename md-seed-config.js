const mongooseLib = require('mongoose')
const tempSeeder = require('./db/seeders/temp.seeder')

mongooseLib.Promise = global.Promise || Promise

module.exports = {
    mongoose: mongooseLib,
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/api',
    seedersList: {
        tempSeeder
    }
}