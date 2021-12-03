const fs = require('fs');
const path = require("path");

const input = fs
	.readFileSync(path.resolve(__dirname, '../inputs/input3.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')


const OXYGEN = 'oxygen'
const CO2 = 'co2'


const preCount = (lines) => {
	const size_line = lines[0].trim().length
	const size_input = lines.length
	const counts = {}
	for (let i = 0; i < size_line; i += 1) {
		counts[i] = 0
	}

	for (const line of lines) {
		for (let i = 0; i < size_input; i += 1) {
			if (line[i] == '1') {
				counts[i] += 1
			}
		}
	}

	return counts
}


const getPowerConsumption = (lines) => {
	const counts = preCount(lines)
	const size = lines.length
	gamma = Object.values(counts).map((x) => x >= size / 2 ? 1 : 0)
								 .join('')

	epsilon = Object.values(counts).map((x) => x < size / 2 ? 1 : 0)
								   .join('')

	return parseInt(gamma, 2) * parseInt(epsilon, 2)
}



const getLifeSupportRating = (lines, mode, pos = 0) => {

	const size_input = lines.length
	let countOfOne = 0
	const lines_ones = []
	const lines_zeros = []

	for (const line of lines) {
		if (line[pos] === '1') {
			countOfOne += 1
			lines_ones.push(line)
		}
		else {
			lines_zeros.push(line)
		}			
	}
	
	const moreOnes = countOfOne >= size_input / 2

	let new_lines = []
	if ((moreOnes && mode === OXYGEN) || (!moreOnes && mode === CO2)) {
		new_lines = lines_ones
	}
	else {
		new_lines = lines_zeros
	}

	if (new_lines.length === 1) {
		return parseInt(new_lines[0], 2)
	}
		
	return getLifeSupportRating(new_lines, mode, pos + 1)
}


oxy = getLifeSupportRating(input, mode=OXYGEN)
co2 = getLifeSupportRating(input, mode=CO2)

console.log(`Result 1: ${getPowerConsumption(input)}`)
console.log(`Result 2: ${oxy * co2}`)

