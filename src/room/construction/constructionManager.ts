import { constants } from "international/constants"
import { generalFuncs } from "international/generalFunctions"
import { basePlanner } from "./basePlanner"

/**
 * Creates construction sites and deletes structures in a room
 */
export function constructionManager(room: Room) {

    // If the construction site count is at its limit, stop

    if (global.constructionSitesCount == 100) return

    // If the room is above 1 construction site, stop

    if (room.find(FIND_MY_CONSTRUCTION_SITES).length > 5) return

    // Stop if placing containers was a success

    placeSourceContainers()

    function placeSourceContainers(): boolean {

        // Construct sourceNames

        const sourceNames: ('source1' | 'source2')[] = [
            'source1',
            'source2'
        ]

        // Iterate through sourceNames

        for (const sourceName of sourceNames) {

            // Try to find the source with the sourceName

            const source: Source = room.get(sourceName)

            // Iterate if there is no resource

            if (!source) continue

            // Try to find an existing sourceContainer for the source

            const sourceContainer = room.get(`${sourceName}Container`)

            // Iterate if there is a sourceContainer

            if (sourceContainer) continue

            // Try to find the closestHarvestPos for the source

            const closestHarvestPos: RoomPosition = room.get(`${sourceName}ClosestHarvestPosition`)

            // Iterate if it doesn't exist

            if (!closestHarvestPos) continue

            // Try to place a container on the closestHarvestPos

            room.createConstructionSite(closestHarvestPos, STRUCTURE_CONTAINER)
        }

        return true
    }

    placeControllerContainer()

    function placeControllerContainer() {

        // Get the center upgrade pos

        const centerUpgadePos: RoomPosition = room.get('centerUpgradePos')

        // Stop if it isn't defined

        if (!centerUpgadePos) return

        // Otherwise place a container on the pos

        room.createConstructionSite(centerUpgadePos, STRUCTURE_CONTAINER)
    }

    manageBasePlanning()

    function manageBasePlanning() {

        // If there are build locations for the base

        if (global[room.name].buildLocations) {

            const baseLocations: BuildLocations = global[room.name].buildLocations

            // Loop through each stamp type in base locations

            for (const stampType in baseLocations) {

                // Get the build object using the stamp type

                const BuildObjects = baseLocations[stampType]

                // Loop through build objects inside build locations for this stamp type

                for (const BuildObj of BuildObjects) {

                    // Place construction sites for the base

                    room.createConstructionSite(BuildObj.x, BuildObj.y, BuildObj.structureType)
                }
            }

            // Stop

            return
        }

        // Otherwise generate the build locations

        global[room.name].buildLocations = basePlanner(room)
    }
}
