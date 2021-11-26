const memHack = require('./other/memHack')

const internationalManager = require('./intenational/internationalManager')

const roomManager = require('./room/roomManager')

module.exports.loop = function() {

    console.log('hi')
    console.log(function() { hi })

    memHack()

    internationalManager()

    roomManager()
}