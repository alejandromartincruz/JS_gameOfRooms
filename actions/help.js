"use strict"

function help(direction, currentRoom) {
	var nextRoom = currentRoom.doors[direction];
	return nextRoom;
}

module.exports = help;