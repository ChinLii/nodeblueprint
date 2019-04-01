const router = require('express').Router()
const TempController = require('./controllers/temp')

router.get('/temp', async function(req, res) {
    const result = await TempController.find()
    res.json(result);
})

module.exports = router