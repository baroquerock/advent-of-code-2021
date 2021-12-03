const fs = require('fs');
const path = require("path");

const input = fs
	.readFileSync(path.resolve(__dirname, '../inputs/input1.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((num) => parseInt(num, 10))

const count = (li, window) => {

	let result = 0;
	let prev = 0;

	for (let j = 0; j < window; j += 1) {
		prev += li[j];
	}

	for (let i = window; i < li.length; i += 1) {
		const curr = prev + li[i] - li[i - window]
		if (prev < curr) {
			result += 1
		}
		prev = curr
	}

	return result;
}


const res1 = count(input, 1)
const res2 = count(input, 3)

console.log(`Result 1: ${res1}`)
console.log(`Result 2: ${res2}`)