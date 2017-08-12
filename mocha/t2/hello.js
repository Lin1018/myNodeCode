module.exports = function(...rest) {
	let sum = 0;
	rest.forEach(function(value) {
		sum += value;
	});
	return sum;
};