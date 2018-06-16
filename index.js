// clear the console
console.log('\033c');

const readline = require('readline-sync');

// accept and read user input
let guess = readline.question('what is your name? ');

// picks a random number between 1 and 100
const number = Math.floor(Math.random() * 100) + 1;

// user gets 5 tries
let tries = 5;

// welcome and game start message
console.log(`Welcome to the game!

Please enter a number between 1 and 100.

You Have ${tries} tries remaining.
`);

// while (tries > 0) {
  
  // let user know if they guessed correctly
  
  // if (guess is equal to number) {
    
    // response = "You guessed correctly!"
        
    // user wins the game
    
    // won = true
    
    // how many guesses it took
    
    // totalGuesses = guesses - tries
    
    // let user know if they guessed incorrectly
    
  // } else if (guess is less then number) {
    
    // guess was too low
    
    // response = "Your guess was too low. Please try again."
    
    // how many guesses are left
    
    // response = "You have " + guesses - 1 + " tries left."
    
  // } else if (guess is greater then number) {
    
    // guess was too high
    
    // response = "Your guess was too low. Please try again."
    
    // how many guesses are left
    
    // response = "You have " + guesses - 1 + " tries left."
    
    // if user is out of guesses
    
  // } else if (guesses is equal to 0) {
    
    // user loses the game
    
    // response = "You lost"
    
    // give the correct number
    
    // response = "The number was " + number + "."
    
    // let user try again or end
    
    // response = "Do you want to try again?"
    
  // }
  
// }