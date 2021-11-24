module.exports = function creepOrganizer() {

    // Config total creepCount

    let totalCreepCount = 0

    // Loop through all of my creeps

    for (const creepName in Memory.creeps) {

        const creep = Game.creeps[creepName]

        // If creep doesn't exist

        if (!creep) {

            // Delete creep from memory and iterate

            delete Memory.creeps[creepName]
            continue
        }

        // Assign creep proper class

        Game.creeps[creepName] = new creepClasses[creep.memory.role](creep)

        //

        const room = creep.room

        // Organize creep by room and role

        room.myCreeps[creep.memory.role].push(creepName)

        // See if creep is dying

        creep.isDying()

        // Stop if creep is dying

        if (creep.memory.dying) continue

        // Increase creepCount for this role

        room.creepCount[creep.memory.role] += 1

        // Increase total creep counter

        totalCreepCount += 1
    }

    // Record number of creeps

    Memory.data.creepCount = totalCreepCount
}