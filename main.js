"use strict"

var read = require('read');

var Room = require('./room');
var startRooms = require('./startRooms');
var go = require('./actions/go');
var help = require('./actions/help');

class Game {



	constructor(player) {

		this.player = player;
		this.current = 0;
		this.rooms = startRooms();
	}

	start() {
		console.log(this.rooms[this.current].description);
		this.ask();
	}

	ask(){
		var options = {
    		prompt: "What are you going to do?\n>"
		}
		
		read(options, this.action.bind(this));
	}

	action (err, input) {
		var input2 = "";
		var actions = {
						go: go,
						pick: "pick",
						drop: "drop",
						search: "search",
						fight: "fight",
						use: "use",
						help: help
						};
		
		if (input.indexOf(" ") > -1) { 
			input = input.split(" ");
		}

		if (Object.prototype.toString.call(input) === '[object Array]') {
			input2 = input[1];
			input = input[0];
		}

		if (actions[input] != undefined){
			this.current = actions[input](input2, this.rooms[this.current]);
		} else {
			console.log(this.player + ", you can't do that. Try another thing or write 'help'")
		}
		this.start()
	}
}

var game = new Game("Alex");
game.start();


