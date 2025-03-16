<?php

/**
 * Fibonacci sequence implementation.
 *
 * The Fibonacci sequence is a series of numbers in which each number is
 * the sum of the two preceding ones, usually starting with 0 and 1.
 *
 * The Fibonacci sequence is defined by the recurrence relation:
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n-1) + F(n-2)
 */

/**
 * Fibonacci sequence implementation.
 *
 * @param int $n
 *   The number of Fibonacci numbers to generate.
 *
 * @return void
 *   The Fibonacci number at position $n.
 */
function fibonacci($n): void
{
    // Using [0,1] will not skip the first number in the sequence,
    // while [1,1] will skip the first number in the sequence.
    $fib = [0, 1];
    for ($i = 1; $i < $n; $i++) {
        $fib[] = $fib[$i] + $fib[$i - 1];
    }

    echo $fib[$n];
}

// Example: fibonacci for 10 is 55.
fibonacci(10);
