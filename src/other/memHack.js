module.exports.memHack = function() {

    if (lastTime && lastMemory && Game.time == lastTime + 1) {

        delete global.Memory

        global.Memory = lastMemory

        RawMemory._parsed = lastMemory

    } else {

        Memory.rooms // forces parsing


        lastMemory = RawMemory._parsed
        Memory.stats.persistent.lastMemoryReset = Game.time
    }

    lastTime = Game.time

    // Handle global time 

    if (!global.age) {

        global.age = 0
    }

    global.age += 1
    Memory.stats.persistent.globalAge = global.age
}