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
 * Recursive implementation of the Fibonacci sequence.
 *
 * @param int $n
 *   The number of the sequence to calculate.
 *
 * @return int
 *   The value of the sequence at position $n.
 */
function fibRecursive(int $n): int
{
    if ($n <= 1) {
        return $n;
    }
    return fibRecursive($n - 1) + fibRecursive($n - 2);
}

/**
 * Iterative implementation of the Fibonacci sequence.
 *
 * @param int $n
 *   The number of the sequence to calculate.
 *
 * @return int
 *   The value of the sequence at position $n.
 */
function fibIterative($n): int
{
    if ($n <= 1) {
        return $n;
    }

    $a = 0;
    $b = 1;

    for ($i = 0; $i < $n; $i++) {
        $sum = $a + $b;
        $a = $b;
        $b = $sum;
    }
    return $a;
}

/**
 * Dynamic implementation of the Fibonacci sequence.
 *
 * @param int $n
 *   The number of the sequence to calculate.
 *
 * @return array
 *   The value of the sequence at position $n.
 */
function fibDynamic(int $n): int
{
    $serie = [0, 1];
    for ($i = 0; $i < $n; $i++) {
        $serie[] = $serie[$i] + $serie[$i + 1];
    }
    return $serie[$n];
}

// Aproximately 112ms to run.
$recursive_start_time = microtime(true);
echo (fibRecursive(25));
$recursive_end_time = microtime(true);
$recursive_execution_time = ($recursive_end_time - $recursive_start_time) * 1000;
echo "\nrecursive time: $recursive_execution_time\n";

// Aproximately 0.11ms to run.
$iterative_start_time = microtime(true);
echo (fibIterative(25));
$iterative_end_time = microtime(true);
$iterative_execution_time = ($iterative_end_time - $iterative_start_time) * 1000;
echo "\niterative time: $iterative_execution_time\n";

// Aproximately 0.11ms to run.
$dynamic_start_time = microtime(true);
echo (fibDynamic(25));
$dynamic_end_time = microtime(true);
$dynamic_execution_time = ($dynamic_end_time - $dynamic_start_time) * 1000;
echo "\ndynamic time: $dynamic_execution_time\n";
