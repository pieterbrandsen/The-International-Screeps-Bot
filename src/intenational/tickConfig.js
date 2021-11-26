module.exports = function tickConfig() {

    // Global configurations

    global.myOrders = Game.market.orders

    // Memory configurations

    // Other configurations

    // Config rooms

    for (const roomName in Game.rooms) {

        const room = Game.rooms[roomName]

        // Iterate if room isn't owned

        if (!room.controller.my) continue

        // Config

        room.orders = {}

        if (!global.rooms[roomName].deposits) global.rooms[roomName].deposits = {}
    }

    // Organize my orders by room

    // Loop through my orders

    for (const order of myOrders) {

        // Iterate if order doesn't have a room

        if (!order.room) continue

        // Stop if order's room doesn't have an orders property

        if (!order.room.orders) continue

        // Set order to room it belongs to

        order.room.orders[order.id] = order
    }
}