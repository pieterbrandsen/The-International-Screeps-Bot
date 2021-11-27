module.exports = function roleManager(room) {

    /* Test if this saves cpu (If it doesn't import the module until called) */

    const managers = {
        sourceHarvester: () => require('./creepManagers/sourceHarvesterManager'),
    }

    console.log(sourceHarvesterManager)

    for (const role in managers) {

        const manager = managers[role]

        // Iterate if there are no creeps of manager's role

        if (room.myCreeps[role].length == 0) continue

        // Run manager

        manager(room, room.myCreeps[role])
    }
}