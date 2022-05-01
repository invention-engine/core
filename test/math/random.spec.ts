import { random } from '../../src/math';

test('Math\'s random function returns just 0 or 1 if there\'s no argument', () => {
  expect(random()).toBeLessThanOrEqual(1);
  expect(random()).toBeGreaterThanOrEqual(0);
});

test('Math\'s random function returns a number between 0 and the given number (excluded) when there\'s exactly one (number) argument', () => {
  expect(random(5)).toBeLessThan(5);
  expect(random(5)).toBeGreaterThanOrEqual(0);
});

test('Math\'s random function returns a number between 0 and the given number (included) when there\'s one number and true as arguments', () => {
  expect(random(5, true)).toBeLessThanOrEqual(5);
  expect(random(5, true)).toBeGreaterThanOrEqual(0);
});

test('Math\'s random function throws error if top is less than 1', () => {
  expect(() => random(-1)).toThrow();
  expect(() => random('0')).toThrow();
});

test('Math\'s random function throws error if top is not a number nor string', () => {
  expect(() => random(true)).toThrow();
});

test('Math\'s random function throws error with wrong arguments', () => {
  expect(() => random(5, 1)).toThrow();
});
