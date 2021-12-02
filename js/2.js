const fs = require('fs');
const path = require("path");

const input = fs
	.readFileSync(path.resolve(__dirname, '../inputs/input2.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

const FORWARD = 'forward'
const DEPTH = 'depth'
const AIM = 'aim'
const DOWN = 'down'
const UP = 'up'

const getPosition1 = (lines) => {
	const position = {
		FORWARD: 0, 
		DEPTH: 0
	}

	for (const line of lines) {
		let [direction, value] = line.split(' ')
		value = parseInt(value, 10)
		if (direction === FORWARD) position.FORWARD += value
		if (direction === DOWN) position.DEPTH += value
		if (direction === UP) position.DEPTH -= value
	}

	return position	
}

const getPosition2 = (lines) => {

	const position = {
		FORWARD: 0, 
		DEPTH: 0,
		AIM: 0
	}

	for (const line of lines) {
		let [direction, value] = line.split(' ')
		value = parseInt(value, 10)
		if (direction === FORWARD) {
			position.FORWARD += value
			position.DEPTH += position.AIM * value			
		}
		if (direction === DOWN) position.AIM += value
		if (direction === UP) position.AIM -= value	
	}

	return position
}


const position1 = getPosition1(input);
const position2 = getPosition2(input);

console.log(`Result 1: ${position1.FORWARD * position1.DEPTH}`)
console.log(`Result 2: ${position2.FORWARD * position2.DEPTH}`)
