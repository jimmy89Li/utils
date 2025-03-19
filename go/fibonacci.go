// Fibonacci sequence implementation.
//
// The Fibonacci sequence is a series of numbers in which each number is
// the sum of the two preceding ones, usually starting with 0 and 1.
//
// The Fibonacci sequence is defined by the recurrence relation:
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1
package main

import (
	"fmt"
	"time"
)

// Recursive implementation of the Fibonacci sequence.
func fibRecursive(n int) int {
	if n <= 1 {
		return n
	}

	return fibRecursive(n-1) + fibRecursive(n-2)
}

// Iterative implementation of the Fibonacci sequence.
func fibIterative(n int) int {
	if n <= 1 {
		return n
	}

	var a = 0
	var b = 1
	for i := 2; i <= n; i++ {
		a, b = b, a+b
	}

	return b
}

// Dynamic programming implementation of the Fibonacci sequence.
func fibDynamic(n int) int {
	if n <= 1 {
		return n
	}

	var memo = make([]int, n+2)
	memo[0] = 0
	memo[1] = 1
	for i := 2; i <= n; i++ {
		memo[i] = memo[i-1] + memo[i-2]
	}

	return memo[n]
}

func main() {
	// Aproximately 37ms to run.
	recursiveStart := time.Now()
	fmt.Println(fibRecursive(35))
	fmt.Println("Recursive time:", time.Since(recursiveStart))

	// Aproximately 0ms to run.
	iterativeStart := time.Now()
	fmt.Println(fibIterative(35))
	fmt.Println("Iterative time:", time.Since(iterativeStart))

	// Aproximately 0ms to run.
	dynamicStart := time.Now()
	fmt.Println(fibDynamic(35))
	fmt.Println("Dynamic time:", time.Since(dynamicStart))
}
