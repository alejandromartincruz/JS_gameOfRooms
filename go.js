"use strict"

function go(direction, currentRoom) {
	var nextRoom = currentRoom.doors[direction];
	return nextRoom;
}

module.exports = go;