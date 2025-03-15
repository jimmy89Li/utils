/**
 * Returns the Fibonacci number at the given position.
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
function fib(num, memo = {}) {
  if (memo[num]) return memo[num];

  if (num < 1) return 0;
  if (num === 1) return 1;

  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);

  return memo[num];
}

console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(15)); // 610
console.log(fib(20)); // 6765
