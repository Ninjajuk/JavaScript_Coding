//Factorial: Using Recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5));

//Fibonacci Sequence:
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(6));

// Sum of Natural Numbers:
function sumOfNaturalNumbers(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfNaturalNumbers(n-1);
    }
}

console.log(sumOfNaturalNumbers(5));

//Power Function:
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent-1);
    }
}

console.log(power(2, 3));

//GCD (Greatest Common Divisor):
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(48, 18));

//Print a Countdown:
function countdown(n) {
    if (n > 0) {
        console.log(n);
        countdown(n-1);
    } else {
        console.log("Go!");
    }
}

countdown(5);

