import {
  validateDiagonally,
  validateDiagonallyInverse,
  validateHorizontally,
  validateVertically,
} from '.';

test('validateHorizontally no consecutive letters', () => {
  const matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P'],
  ];

  expect(validateHorizontally(matrix)).toBe(false);
});

test('validateHorizontally consecutive letters in first row', () => {
  const matrix = [
    ['A', 'A', 'A', 'A'],
    ['A', 'B', 'C', 'D'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P'],
  ];

  expect(validateHorizontally(matrix)).toBe(true);
});

test('validateHorizontally consecutive letters in last row', () => {
  const matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['A', 'A', 'A', 'A'],
  ];

  expect(validateHorizontally(matrix)).toBe(true);
});

test('validateVertically no consecutive letters', () => {
  const matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P'],
  ];

  expect(validateVertically(matrix)).toBe(false);
});

test('validateVertically consecutive letters in first column', () => {
  const matrix = [
    ['A', 'X', 'H', 'G'],
    ['A', 'G', 'Z', 'F'],
    ['A', 'J', 'Ñ', 'S'],
    ['A', 'O', 'P', 'Z'],
  ];

  expect(validateVertically(matrix)).toBe(true);
});

test('validateVertically consecutive letters in last column', () => {
  const matrix = [
    ['A', 'B', 'C', 'A'],
    ['E', 'F', 'G', 'A'],
    ['I', 'J', 'K', 'A'],
    ['M', 'N', 'O', 'A'],
  ];

  expect(validateVertically(matrix)).toBe(true);
});

test('validateDiagonally no consecutive letters', () => {
  const matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P'],
  ];

  expect(validateDiagonally(matrix)).toBe(false);
});

test('validateDiagonally consecutive letters from first column to last', () => {
  const matrix = [
    ['A', 'B', 'C', 'Z'],
    ['G', 'A', 'C', 'K'],
    ['F', 'B', 'A', 'H'],
    ['A', 'B', 'C', 'A'],
  ];

  expect(validateDiagonally(matrix)).toBe(true);
});

test('validateDiagonally consecutive letters in middle', () => {
  const matrix = [
    ['A', 'B', 'C', 'Z'],
    ['A', 'Z', 'C', 'K'],
    ['F', 'A', 'A', 'H'],
    ['A', 'B', 'A', 'A'],
  ];

  expect(validateDiagonally(matrix)).toBe(true);
});

test('validateDiagonallyInverse no consecutive letters', () => {
  const matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P'],
  ];

  expect(validateDiagonallyInverse(matrix)).toBe(false);
});

test('validateDiagonallyInverse consecutive letters from last column to first', () => {
  const matrix = [
    ['A', 'B', 'C', 'A'],
    ['G', 'J', 'A', 'K'],
    ['F', 'A', 'X', 'H'],
    ['A', 'B', 'C', 'A'],
  ];

  expect(validateDiagonallyInverse(matrix)).toBe(true);
});

test('validateDiagonallyInverse consecutive letters in middle', () => {
  const matrix = [
    ['A', 'B', 'C', 'O'],
    ['G', 'J', 'D', 'A'],
    ['F', 'W', 'A', 'H'],
    ['I', 'A', 'C', 'A'],
  ];

  expect(validateDiagonallyInverse(matrix)).toBe(true);
});
