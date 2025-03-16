/**
 * Fibonacci sequence implementations.
 */

/**
 * Returns the Fibonacci number at the given position, using recursion.
 *
 * @param {number} num
 *   The position of the Fibonacci number to return.
 *
 * @returns {number}
 *   The Fibonacci number at the given position.
 */
const fibRecursive = (num) => {
  if (num < 1) return 0;
  if (num <= 1) return num;

  return fibRecursive(num - 1) + fibRecursive(num - 2);
};

/**
 * Returns the Fibonacci number at the given position, using memoization.
 *
 * @param {number} num
 *   The position of the Fibonacci number to return.
 * @param {object} memo
 *   An object to store the results of previous calculations.
 *
 * @returns {number}
 *   The Fibonacci number at the given position.
 *
 * @example
 * fib(10); // 55
 */
const fibMemoized = (num, memo = {}) => {
  if (memo[num]) return memo[num];

  if (num < 1) return 0;
  if (num === 1) return 1;

  return (memo[num] = fibMemoized(num - 1, memo) + fibMemoized(num - 2, memo));
};
