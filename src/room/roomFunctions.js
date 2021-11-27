Room.prototype.get = function() {

    const room = this

    const roomObjects = {}

    /**
     * @param opts
     */
    class RoomObject {
        constructor(opts) {

            const roomObject = this

            roomObject.value =
        }
        cache() {

            const roomObject = this

            if (roomObject.cacheMethod == 'memory') {

                room.memory[roomObject.name] = roomObject.value
            }
        }
        getValue() {

            const roomObject = this


        }
    }

    function manageRoomObj(opts) {


    }

    manageRoomObj({
        name: 'anchorPoint',
    })

    function findIDsOfSources() {


    }

    function findHarvestPositions() {


    }

    function findRoadHarvestPosition(harvestPositions) {


    }

    function findClosestHarvestPosition(harvestPositions) {


    }

    function findSourceLink(closestHarvestPos) {


    }
}

Room.prototype.newPos = function(pos) {

    const room = this

    return new RoomPosition(pos.x, pos.y, room.name)
}

Room.prototype.actionVisual = function(pos1, pos2, type) {

    const room = this


}

Room.prototype.scout = function() {

    const room = this


}

Room.prototype.advancedPath = function(opts) {

    const room = this


}