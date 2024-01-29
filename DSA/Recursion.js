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

