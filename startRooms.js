"use strict"

var Room = require('./room');

function startRooms() {


		var room0 = new Room (0, "You are in a dark room, there is a door in the north", {
			north: 1,
			east: 0,
			south: 0,
			west: 0
		});

		var room1 = new Room (1, "You are in a dark corridor, You can't see nothing yet.", {
			north: 1,
			east: 1,
			south: 0,
			west: 1
		});

		var rooms = [room0, room1]
		return rooms
}

module.exports = startRooms