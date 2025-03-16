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
 * Returns the Fibonacci number at the given position, using iteration.
 *
 * @param {number} num
 *   The position of the Fibonacci number to return.
 *
 * @returns {number}
 *   The Fibonacci number at the given position.
 */
const fibIterative = (num) => {
  if (num < 1) return 0;
  if (num <= 1) return num;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= num; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
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

// Aproximately 93ms to run.
console.time('fibRecursive');
console.log(fibRecursive(35));
console.timeEnd('fibRecursive');

// Aproximately 0.15ms to run.
console.time('fibIterative');
console.log(fibIterative(35));
console.timeEnd('fibIterative');

// Aproximately 0.15ms to run.
console.time('fibMemoized');
console.log(fibMemoized(35));
console.timeEnd('fibMemoized');
