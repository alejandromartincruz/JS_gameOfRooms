"use strict"

class Room {
	constructor(current, description, doors) {
		
		/*var exits = {
			north: "",
			east: "",
			south: "",
			west: ""
		};*/

		this.current = current;
		this.description = description;
		this.doors = doors;
		this.item = "";
	}

	voidMethod(){
		console.log("This method does nothing")
	}
}

module.exports = Room;