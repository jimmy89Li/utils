/**
 * Padovan Sequence implementation.
 */

/**
 * Padovan Sequence using recursion.
 *
 * @param {number} n
 *   The position of the Padovan number to return.
 *
 * @returns {number}
 *   The Padovan number at the given position.
 */
const padovanRecursive = (n) => {
  if (n <= 2) {
    return 1;
  }

  return padovanRecursive(n - 2) + padovanRecursive(n - 3);
};

/**
 * Padovan Sequence using iteration.
 *
 * @param {number} n
 *   The position of the Padovan number to return.
 *
 * @returns {number}
 *   The Padovan number at the given position.
 */
const padovanIterative = (n) => {
  let a = 1;
  let b = 1;
  let c = 1;

  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = c;
    c = temp;
  }

  return c;
};

/**
 * Padovan Sequence using memoization.
 *
 * @param {number} n
 *   The position of the Padovan number to return.
 * @param {object} memo
 *   An object to store the results of previous calculations.
 *
 * @returns {number}
 *   The Padovan number at the given position.
 */
const padovanMemoized = (n, memo = {}) => {
  if (memo[n]) return memo[n];

  if (n <= 2) return 1;

  memo[n] = padovanMemoized(n - 2, memo) + padovanMemoized(n - 3, memo);
  return memo[n];
};

// Aproximately 7.4ms to run.
console.time('padovanRecursive');
console.log(padovanRecursive(35));
console.timeEnd('padovanRecursive');

// Aproximately 0.16ms to run.
console.time('padovanIterative');
console.log(padovanIterative(35));
console.timeEnd('padovanIterative');

// Aproximately 0.16ms to run.
console.time('padovanMemoized');
console.log(padovanMemoized(35));
console.timeEnd('padovanMemoized');
