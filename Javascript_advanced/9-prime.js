function countPrimeNumbers() {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
        }
        return true;
    };

    const count = () => {
        let primeCount = 0;
        for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
        }
        return primeCount;
    };

    const start = performance.now();
    const result = count();
    const end = performance.now();

    const executionTime = end - start;

    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
    return result;
}