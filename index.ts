type MatrixDimensions = {
  rows: number;
  cols: number;
};

type Matrix = string[][];

const getMatrixDimensions = (matrix: Matrix): MatrixDimensions => ({
  rows: matrix.length,
  cols: matrix[0].length,
});

export const validateHorizontally = (matrix: Matrix): boolean => {
  const { rows, cols } = getMatrixDimensions(matrix);
  let result = false;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols - 2; col++) {
      const current = matrix[row][col];
      const next = matrix[row][col + 1];
      const nextNext = matrix[row][col + 2];

      if (current === next && current === nextNext) {
        result = true;
      }
    }
  }

  return result;
};

export const validateVertically = (matrix: Matrix): boolean => {
  const { rows, cols } = getMatrixDimensions(matrix);
  let result = false;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows - 2; row++) {
      const current = matrix[row][col];
      const next = matrix[row + 1][col];
      const nextNext = matrix[row + 2][col];

      if (current === next && current === nextNext) {
        result = true;
      }
    }
  }

  return result;
};

export const validateDiagonally = (matrix: Matrix): boolean => {
  const { rows, cols } = getMatrixDimensions(matrix);
  let result = false;

  for (let row = 0; row < rows - 2; row++) {
    for (let col = 0; col < cols - 2; col++) {
      const current = matrix[row][col];
      const next = matrix[row + 1][col + 1];
      const nextNext = matrix[row + 2][col + 2];

      if (current === next && current === nextNext) {
        result = true;
      }
    }
  }

  return result;
};

export const validateDiagonallyInverse = (matrix: Matrix): boolean => {
  const { rows, cols } = getMatrixDimensions(matrix);
  let result = false;

  for (let row = 0; row < rows - 2; row++) {
    for (let col = cols - 1; col > 1; col--) {
      const current = matrix[row][col];
      const next = matrix[row + 1][col - 1];
      const nextNext = matrix[row + 2][col - 2];

      if (current === next && current === nextNext) {
        result = true;
      }
    }
  }

  return result;
};
