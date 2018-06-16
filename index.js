// clear the console
console.log('\033c');

const readline = require('readline-sync');

// accept and read user input
let userName = readline.question('what is your name? ');

// picks a random number between 1 and 100
const number = Math.floor(Math.random() * 100) + 1;

// welcome and game start message
console.log(`Welcome to the game, ${userName}!
`);

// user hasen't won yet
let won = false;

while (!won) {
  
  // user gets 5 tries
  let tries = 5;
  
  console.log(`Please enter a number between 1 and 100.
  
You Have ${tries} tries remaining.
`);
  
  while (tries > 0 && !won) {
    
    // accept user guess
    let guess = readline.question();
    
    // make sure input is a number and within range
    if (isNaN(guess) || guess < 1 || guess > 100) {
      while (isNaN(guess) || guess < 1 || guess > 100) {
        guess = readline.question(`
Your answer must be a number between 1 and 100: `);
      }
    }
    
    // remove a try
    tries -= 1;
    
    // let user know if they guessed correctly
    
    // if (guess is equal to number) {
    if (guess == number) {
      // response = "You guessed correctly!"
      console.log('You guessed correctly!\r\n');
      // user wins the game
      console.log(`${userName} has won the game! Congratulations!`);
      won = true;
      // how many guesses it took
      console.log(`It took ${5 - tries} tries!`);
    } else if (guess < number && tries > 0) {
      // guess was too low
      console.log(`Your guess was too low. Please try again. You have ${tries} tries left.`);
    } else if (guess > number && tries > 0) {
      // guess was too high
      console.log(`Your guess was too high. Please try again. You have ${tries} tries left.`);
    }
  }
  
  // if user loses the game
  if (!won) {
    console.log(`Sorry, ${userName} you lost! The number was ${number}`);
  }
  
  // let user try again or end
  let tryAgain = readline.question('Do you want to try again? y/n: ');

  while (tryAgain != 'y' && tryAgain != 'n') {
    if (tryAgain == 'y') {
      won = false;
    } else if (tryAgain == 'n') {
      won = true;
      console.log(`Thanks for playing ${userName}!`);
    } else {
      tryAgain = readline.question('Answer must be  y or n: ');
    }
  }
}