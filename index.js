console.log('random node project!');

function doMath(a, b) {
	if (isNaN(a) || isNaN(b)) return 'only numbers are allowed!'

	return a+b;
}

module.exports = { doMath };
