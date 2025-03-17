# Fibonacci sequence implementation.
#
# The Fibonacci sequence is a series of numbers in which each number is
# the sum of the two preceding ones, usually starting with 0 and 1.
#
#  The Fibonacci sequence is defined as:
# F(0) = 0
# F(1) = 1
# F(n) = F(n - 1) + F(n - 2)

from timeit import default_timer as timer


# Returns the Fibonacci number at the given position, using recursion.
def fibonacciRecursive(n):
  if n < 0:
    raise ValueError("Negative arguments are not supported")
  if n <= 1:
    return n
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)

# Returns the Fibonacci number at the given position, using iteration.
def fibonacciIterative(n):
  if n < 0:
    raise ValueError("Negative arguments are not supported")
  if n <= 1:
    return n

  a = 0
  b = 1
  for i in range(2, n + 1):
    a, b = b, a + b
  return b

# Returns the Fibonacci number at the given position, using memoization.
def fibonacciMemoization(n, memo):
  if n < 0:
    raise ValueError("Negative arguments are not supported")
  if n <= 1:
    return n

  if memo[n] is not None:
    return memo[n]
  memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo)
  return memo[n]

# Aproximately 1494ms to run
fibonacci_recursive_time = timer()
print(fibonacciRecursive(35))
print("fibonacciRecursive: %s ms" % ((timer() - fibonacci_recursive_time) * 1000))

# Aproximately 0.23ms to run
fibonacci_iterative_time = timer()
print(fibonacciIterative(35))
print("fibonacciIterative %s ms" % ((timer() - fibonacci_iterative_time) * 1000))

# Aproximately 0.24ms to run
fibonacci_memoization_time = timer()
print(fibonacciMemoization(35, [None] * 36))
print("fibonacciMemoization %s ms" % ((timer() - fibonacci_memoization_time) * 1000))
