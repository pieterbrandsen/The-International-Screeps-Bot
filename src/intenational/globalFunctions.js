global.avgPrice = function() {


}

global.createClass = function(className) {

    return class className {}
}

/**
 * @param id
 * @returns
 */
global.findObjectWithId = function(id) {

    return Game.getObjectById(id) || undefined
}

/**
 * @param rect
 * @returns
 */
global.getPositionsInsideRect = function(rect) {

    let positions = []

    for (let x = rect.x1; x <= rect.x2; x++) {
        for (let y = rect.y1; y <= rect.y2; y++) {

            positions.push({ x: x, y: y })
        }
    }

    return positions
}

/**
 * 
 * @param pos1 
 * @param pos2 
 * @returns 
 */
global.arePositionsAlike = function(pos1, pos2) {

    if (pos1.x == pos2.x && pos1.y == pos2.y) return true
    return false
}

global.advancedRun = function(functionName) {

    let cpu = Game.cpu.getUsed()

    functionName()

    cpu = cpu - Game.cpu.getUsed()

    // Stop if cpu logging is off

    if (!cpuLogging) return

    // Create custom log for functions used cpu

    customLog('CPU for ' + functionName, cpu)
}

/**
 * Creates a console log using HTML and CSS
 * @param {*} title 
 * @param {*} message 
 * @param {*} color 
 * @param {*} bgColor 
 */
global.customLog = function(title, message, color, bgColor) {


}