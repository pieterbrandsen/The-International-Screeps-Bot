class SourceHarvester {
    constructor() {


    }
}

module.exports = function sourceHarvesterManager(room, creepsOfRole) {

    for (const creepName of creepsOfRole) {

        const creep = Game.creeps[creepName]

        // Find Source with name in creeps memory

        const source = room.get(creep.memory.sourceName)

        // Record that the creep has source target

        creep.recordSource()

        // Try to move to source. If creep moved then iterate

        const travelToSourceResult = creep.travelToSource()
        if (travelToSourceResult == 0) continue

        // Try to normally harvest. Iterate if creep harvested iterate

        const advancedHarvestResult = creep.advancedHarvestSource(source)
        if (advancedHarvestResult == 0) continue

        // Try to harvest using the sourceLink. If creep harvested iterate

        const transferToSourceLinkResult = creep.transferToSourceLink()
        if (transferToSourceLinkResult == 0 || transferToSourceLinkResult == 'noLink') continue

        // If the source is empty repair contianer if it exists. Iterate if success

        const advancedRepairResult = creep.repairSourceContainer()
        if (advancedRepairResult == 0 || advancedRepairResult == 'noContainer') continue
    }
}