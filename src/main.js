const memHack = require('./other/memHack')

require('./other/memHack')

require('./intenational/internationalManager')

require('./roomManager')

module.exports.loop = function() {

    memHack()
}