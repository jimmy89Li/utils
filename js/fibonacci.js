/**
 * Returns the Fibonacci number at the given position.
 *
 * @param {number} num
 *   The position of the Fibonacci number to return.
 *
 * @returns {number}
 *   The Fibonacci number at the given position.
 *
 * @example
 * fib(10); // 55
 */
function fib(num) {
  if (num < 1) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(15)); // 610
console.log(fib(20)); // 6765
