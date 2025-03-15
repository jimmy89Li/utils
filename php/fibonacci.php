<?php

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
