 const mongoose = require('mongoose')
 const Temp = mongoose.model('Temp')

 const TempController = {
    async find(){
        const temps = await Temp.find()
        return temps
    }
 }

 module.exports = TempController