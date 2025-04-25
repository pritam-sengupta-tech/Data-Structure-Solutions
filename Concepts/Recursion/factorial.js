function factorial(number) {
    if(number <= 0) return undefined;
    if (number === 1) return 1;
    return number * factorial(number - 1);
}

console.log("Factorial of 10 is ", factorial(10));
console.log("Factorial of 5 is ", factorial(5));
console.log("Factorial of 0 is ", factorial(0));
console.log("Factorial of -5 is ", factorial(-5));

