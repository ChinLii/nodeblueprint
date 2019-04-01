const mongoose = require('mongoose')

const { Schema } = mongoose

const TempSchema = new Schema({
    name: String,
    description: String
})

const TempModel = mongoose.model('Temp', TempSchema, 'Temp');

module.exports = TempModel;