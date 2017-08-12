const assert = require('assert');
const hello = require('../async-hello.js');

describe('#async-hello.js', () => {
	describe('#asyncCalculate()', () => {
		it('async function', async () => {
			let r = await hello();
			assert.strictEqual(r,15);
		});
	})
});