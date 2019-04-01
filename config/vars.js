const path = require('path')

require('dotenv-safe').load({
    path: path.join(__dirname, '../.env')
})

module.exports = {
    env: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 4000,
    mongo: {
        uri: process.env.MONGO_URI
    }
}