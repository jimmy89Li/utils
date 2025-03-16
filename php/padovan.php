<?php

/**
 * Padovan sequence implementation.
 *
 * The Padovan sequence is a series of numbers in which each number is
 * the sum of the two preceding ones, usually starting with 1, 1 and 1.
 *
 * The Padovan sequence is defined by the recurrence relation:
 * P(0) = 1
 * P(1) = 1
 * P(2) = 1
 * P(n) = P(n-2) + P(n-3)
 */

/**
 * Recursive implementation of the Padovan sequence.
 *
 * @param int $n
 *   The number of the sequence to calculate.
 *
 * @return int
 *   The value of the sequence at position $n.
 */
function padovanRecursive(int $n): int
{
    if ($n <= 2) {
        return 1;
    }

    return padovanRecursive($n - 2) + padovanRecursive($n - 3);
}

/**
 * Iterative implementation of the Padovan sequence.
 *
 * @param int $n
 *   The number of the sequence to calculate.
 *
 * @return int
 *   The value of the sequence at position $n.
 */
function padovanIterative(int $n): int
{
    $a = 1;
    $b = 1;
    $c = 1;

    for ($i = 0; $i < $n; $i++) {
        $sum = $a + $b;
        $a = $b;
        $b = $c;
        $c = $sum;
    }

    return $a;
}

/**
 * Dynamic implementation of the Padovan sequence.
 *
 * @param int $n
 *   The number of the sequence to calculate.
 *
 * @return int
 *   The value of the sequence at position $n.
 */
function padovanDynamic(int $n): int
{
    $padovan = [1, 1, 1];

    for ($i = 3; $i <= $n; $i++) {
        $padovan[$i] = $padovan[$i - 2] + $padovan[$i - 3];
    }

    return $padovan[$n];
}

// Aproximately 12ms to run.
$recursive_start_time = microtime(true);
echo padovanRecursive(n: 35);
$recursive_end_time = microtime(true);
$recursive_execution_time = ($recursive_end_time - $recursive_start_time) * 1000;
echo "\nrecursive time: $recursive_execution_time\n";

// Aproximately 0.08ms to run.
$iterative_start_time = microtime(true);
echo padovanIterative(n: 35);
$iterative_end_time = microtime(true);
$iterative_execution_time = ($iterative_end_time - $iterative_start_time) * 1000;
echo "\niterative time: $iterative_execution_time\n";

// Aproximately 0.08ms to run.
$dynamic_start_time = microtime(true);
echo padovanDynamic(n: 35);
$dynamic_end_time = microtime(true);
$dynamic_execution_time = ($dynamic_end_time - $dynamic_start_time) * 1000;
echo "\ndynamic time: $dynamic_execution_time\n";
