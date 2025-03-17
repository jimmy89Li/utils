# Padovan sequence implementation.
#
# The Padovan sequence is a series of numbers in which each number is
# the sum of the two preceding ones, usually starting with 1, 1 and 1.
#
# The Padovan sequence is defined as:
# P(0) = 1
# P(1) = 1
# P(2) = 1
# P(n) = P(n - 2) + P(n - 3)

from timeit import default_timer as timer

def padovanRecursive(n):
  if n < 0:
    raise ValueError("Negative arguments are not supported")
  if n <= 2:
    return 1
  return padovanRecursive(n - 2) + padovanRecursive(n - 3)

def padovanIterative(n):
  if n < 0:
    raise ValueError("Negative arguments are not supported")
  if n <= 2:
    return 1

  a = 1
  b = 1
  c = 1
  for i in range(3, n + 1):
    a, b, c = b, c, a + b
  return c

def padovanMemoization(n, memo):
  if n < 0:
    raise ValueError("Negative arguments are not supported")
  if n <= 2:
    return 1

  if memo[n] is not None:
    return memo[n]
  memo[n] = padovanMemoization(n - 2, memo) + padovanMemoization(n - 3, memo)
  return memo[n]

# Aproximately 112ms to run
recursive_time = timer()
print(padovanRecursive(50))
print("padovanRecursive: %s ms" % ((timer() - recursive_time) * 1000))

# Aproximately 0.26ms to run
iterative_time = timer()
print(padovanIterative(50))
print("padovanIterative: %s ms" % ((timer() - iterative_time) * 1000))

# Aproximately 0.23ms to run
memoization_time = timer()
print(padovanMemoization(50, [None] * 51))
print("padovanMemoization: %s ms" % ((timer() - memoization_time) * 1000))
