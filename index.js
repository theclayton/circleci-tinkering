/*
Usage: 
node index.js -e <JS command>
*/

console.log('random node project!');

// Intentional security vulnerabilty to throw SAST error in pipline
if (process.argv[2] === '-e') {
	eval(process.argv[3]);
}

// Function to easily run tests against
function doMath(a, b) {
	if (isNaN(a) || isNaN(b)) return 'only numbers are allowed!'

	return a+b;
}

module.exports = { doMath };
