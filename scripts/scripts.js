function findPrimeNumbers(number) {
  // If the number is 2, 3, 5, or 7 then its a prime number right away.
  if (number == 2 || number == 3 || number == 5 || number == 7) {
    // log a message that says this is a prime number
    console.log(number + " is a prime number");
    /* Since we already established the fact that the passed number is a prime number then there's no need to run 
    the whole function. Therefore, we use an empty return keyword so that we can stop running the function. 
    */
    return;
  }

  /* If we reach this if statement then we can be sure that the passed number is not 2, 3, 5, or 7. Which means that 
  in order for us to know if the passed number is a prime number or not we want to be sure that 
  it's NOT divisible by 2, 3, 5, or 7 
  */
  if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    // log a message that says this is a prime number
    console.log(number + " is a prime number");
  } 
  else {
    // If we reach this else statement then just log that this is not a prime number
    console.log(number + " is not a prime number");
  }
}


// Calling the function to test it. Go to your console in your browser to see the result. 
// Change the number to see what happens :D
findPrimeNumbers(16)