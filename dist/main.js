/* This header is placed at the beginning of the output file and defines the
	special `__require`, `__getFilename`, and `__getDirname` functions.
*/
(function() {
	/* __modules is an Array of functions; each function is a module added
		to the project */
var __modules = {},
	/* __modulesCache is an Array of cached modules, much like
		`require.cache`.  Once a module is executed, it is cached. */
	__modulesCache = {},
	/* __moduleIsCached - an Array of booleans, `true` if module is cached. */
	__moduleIsCached = {};
/* If the module with the specified `uid` is cached, return it;
	otherwise, execute and cache it first. */
function __require(uid, parentUid) {
	if(!__moduleIsCached[uid]) {
		// Populate the cache initially with an empty `exports` Object
		__modulesCache[uid] = {"exports": {}, "loaded": false};
		__moduleIsCached[uid] = true;
		if(uid === 0 && typeof require === "function") {
			require.main = __modulesCache[0];
		} else {
			__modulesCache[uid].parent = __modulesCache[parentUid];
		}
		/* Note: if this module requires itself, or if its depenedencies
			require it, they will only see an empty Object for now */
		// Now load the module
		__modules[uid].call(this, __modulesCache[uid], __modulesCache[uid].exports);
		__modulesCache[uid].loaded = true;
	}
	return __modulesCache[uid].exports;
}
/* This function is the replacement for all `__filename` references within a
	project file.  The idea is to return the correct `__filename` as if the
	file was not concatenated at all.  Therefore, we should return the
	filename relative to the output file's path.

	`path` is the path relative to the output file's path at the time the
	project file was concatenated and added to the output file.
*/
function __getFilename(path) {
	return require("path").resolve(__dirname + "/" + path);
}
/* Same deal as __getFilename.
	`path` is the path relative to the output file's path at the time the
	project file was concatenated and added to the output file.
*/
function __getDirname(path) {
	return require("path").resolve(__dirname + "/" + path + "/../");
}
/********** End of header **********/
/********** Start module 0: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\main.js **********/
__modules[0] = function(module, exports) {
const memHack = __require(1,0)

const internationalManager = __require(2,0)

const roomManager = __require(3,0)

module.exports.loop = function() {

    console.log('hi')
    console.log(function() { hi })

    memHack()

    internationalManager()

    roomManager()
}
return module.exports;
}
/********** End of module 0: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\main.js **********/
/********** Start module 1: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\other\memHack.js **********/
__modules[1] = function(module, exports) {
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

    if (!global.age) {

        global.age = 0
    }

    global.age += 1
    Memory.stats.persistent.globalAge = global.age
}
return module.exports;
}
/********** End of module 1: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\other\memHack.js **********/
/********** Start module 2: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\intenational\internationalManager.js **********/
__modules[2] = function(module, exports) {
__require(4,2)
__require(5,2)

const config = requrie('./config')
const tickConfig = requrie('./tickConfig')

const creepOrganizer = __require(6,2)

module.exports = function internationalManager() {

    config()
    creepOrganizer()
}
return module.exports;
}
/********** End of module 2: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\intenational\internationalManager.js **********/
/********** Start module 3: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\roomManager.js **********/
__modules[3] = function(module, exports) {
__require(7,3)

const spawnManager = __require(8,3)
const spawnRequester = __require(9,3)

module.exports = function roomManager() {


}
return module.exports;
}
/********** End of module 3: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\roomManager.js **********/
/********** Start module 4: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\creeps\creepFunctions.js **********/
__modules[4] = function(module, exports) {

return module.exports;
}
/********** End of module 4: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\creeps\creepFunctions.js **********/
/********** Start module 5: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\creeps\creepClasses.js **********/
__modules[5] = function(module, exports) {

return module.exports;
}
/********** End of module 5: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\creeps\creepClasses.js **********/
/********** Start module 6: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\intenational\creepOrganizer.js **********/
__modules[6] = function(module, exports) {
module.exports = function creepOrganizer() {

    let totalCreepCount = 0

    for (const creepName in Memory.creeps) {

        const creep = Game.creeps[creepName]

        if (!creep) {

            delete Memory.creeps[creepName]
            continue
        }

        Game.creeps[creepName] = new creepClasses[creep.memory.role](creep)

        const room = creep.room

        room.myCreeps[creep.memory.role].push(creepName)

        creep.isDying()

        if (creep.memory.dying) continue

        room.creepCount[creep.memory.role] += 1

        totalCreepCount += 1
    }

    Memory.data.creepCount = totalCreepCount
}
return module.exports;
}
/********** End of module 6: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\intenational\creepOrganizer.js **********/
/********** Start module 7: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\roomFunctions.js **********/
__modules[7] = function(module, exports) {
Room.prototype.get = function() {

    const room = this

    const roomObjects = {}

    class RoomObject {
        constructor() {


        }
        cache() {


        }
        getValue()
    }

    function findIDsOfSources() {


    }

    function findHarvestPositions() {


    }
}
return module.exports;
}
/********** End of module 7: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\roomFunctions.js **********/
/********** Start module 8: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\spawning\spawnManager.js **********/
__modules[8] = function(module, exports) {
const spawnRequests = __require(9,8)

module.exports = function spawnManager(room) {


}
return module.exports;
}
/********** End of module 8: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\spawning\spawnManager.js **********/
/********** Start module 9: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\spawning\spawnRequester.js **********/
__modules[9] = function(module, exports) {
module.exports = function spawnRequeter(room) {


}
return module.exports;
}
/********** End of module 9: C:\Users\carso\Documents\GitHub\The-Internationale-Screeps-Bot\src\room\spawning\spawnRequester.js **********/
/********** Footer **********/
if(typeof module === "object")
	module.exports = __require(0);
else
	return __require(0);
})();
/********** End of footer **********/
