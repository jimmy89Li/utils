/**
 * Perrin Sequence implementation.
 *
 * Perrin Numbers are defined as:
 * P(0) = 3
 * P(1) = 0
 * P(2) = 2
 * P(n) = P(n - 2) + P(n - 3)
 */

/**
 * Perrin Sequence using recursion.
 *
 * @param {number} n
 *   The position of the Perrin number to return.
 *
 * @returns {number}
 *   The Perrin number at the given position.
 */
const perrinRecursive = (n) => {
  if (n === 0) return 3;
  if (n === 1) return 0;
  if (n === 2) return 2;

  return perrinRecursive(n - 2) + perrinRecursive(n - 3);
};

/**
 * Perrin Sequence using recursion.
 *
 * @param {number} n
 *   The position of the Perrin number to return.
 *
 * @returns {number}
 *   The Perrin number at the given position.
 */
const perrinIterative = (n) => {
  let a = 3;
  let b = 0;
  let c = 2;

  for (let i = 3; i <= n; i++) {
    const temp = b + c;
    b = c;
    c = a;
    a = temp;
  }

  return c;
};

/**
 * Perrin Sequence using memoization.
 *
 * @param {number} n
 *   The position of the Perrin number to return.
 * @param {object} memo
 *   An object to store the results of previous calculations.
 *
 * @returns {number}
 *   The Perrin number at the given position.
 */
const perrinMemoization = (n, memo = {}) => {
  if (n === 0) return 3;
  if (n === 1) return 0;
  if (n === 2) return 2;

  if (!memo[n]) {
    memo[n] = perrinMemoization(n - 2, memo) + perrinMemoization(n - 3, memo);
  }

  return memo[n];
};

// Aproximately 7.09ms to run.
console.time('perrinRecursive');
console.log(perrinRecursive(35));
console.timeEnd('perrinRecursive');

// Aproximately 0.11ms to run.
console.time('perrinIterative');
console.log(perrinIterative(35));
console.timeEnd('perrinIterative');

// Aproximately 0.12ms to run.
console.time('perrinMemoization');
console.log(perrinMemoization(35));
console.timeEnd('perrinMemoization');
