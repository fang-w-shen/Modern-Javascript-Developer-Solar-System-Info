"use strict";
let mercury = require('./mercury');
let venus = require('./venus');
let earth = require('./earth');
let mars = require('./mars');
let jupiter = require('./jupiter');
let saturn = require('./saturn');
let uranus = require('./uranus');
let neptune = require('./neptune');
let printtodom = require('./outputto');

let solarsystem = {
	mercury,
	venus,
	earth,
	mars,
	jupiter,
	saturn,
	uranus,
	neptune
};

for (let planets in solarsystem) {
	printtodom("#body",solarsystem[planets]);
		
}


