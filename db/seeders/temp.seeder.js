const { Seeder } = require('mongoose-data-seed')
const mongoose = require('mongoose')

require('../schema/temp')

const Temp = mongoose.model('Temp')

const data = [
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'test1',
        description: 'it is the description of test1'
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'test2',
        description: 'it is the description of test2'
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'test3',
        description: 'it is the description of test3'
    }
]

const TempSeeder = Seeder.extend({
    async shouldRun() {
      return true;
    },
    async run() {
      return Temp.create(data);
    }
});

module.exports = TempSeeder;