module.exports = function config() {

    // Global configurations

    // Stop if global is already constructed

    if (global.constructed) return

    // Construct global

    global.constructed = true

    // Variable of my username

    global.me = 'MarvinTMB'

    // Array of playernames to apply ally logic to

    global.allyList = [
        "Q13214",
        "Orlet",
        "BarryOSeven",
        "slowmotionghost",
    ]

    // Set of messages to randomly apply to commune rooms

    global.communeSignMessages = [
        'A commune of the proletariat. Bourgeoisie not welcome here!'
    ]

    // Set of messages to randomly apply to non-commune rooms

    global.nonCommuneSignMessages = [
        'The top 1% have more money than the poorest 4.5 billion',
        'McDonalds workers in the US make $10/hour. In Denmark, as a result of unions, they make $22/hour',
        'We have democracy in our policial system, why do we not have it in our companies?',
        'Workers of the world, unite!',
        'Real democracy requires democracy in the workplace - Richard Wolff',
        'Adults spend a combined 13 years of their life under a dictatorship: the workplace',
    ]

    global.log = ``

    global.cpuLogging = false

    // Memory configurations

    if (Memory.constructed) return

    // Construct Memory

    Memory.constructed = true
}