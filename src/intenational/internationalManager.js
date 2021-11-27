const config = requrie('./config')
const tickConfig = requrie('./tickConfig')

const creepOrganizer = require('./creepOrganizer')

module.exports = function internationalManager() {

    config()
    creepOrganizer()
}