const { doMath } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(doMath(1, 2)).toBe(3);
});
