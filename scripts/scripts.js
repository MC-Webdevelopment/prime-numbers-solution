function findPrimeNumbers(number) {
  if (number == 2 || number == 3 || number == 5 || number == 7) {
    console.log(number + " is a prime number");
    return;
  }

  if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 &&number % 7 !== 0) {
    console.log(number + " is a prime number");
  } else console.log(number + " is NOT a prime number");
}

findPrimeNumbers(89)