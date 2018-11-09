// We start the game with a score of 0.
var wins = 0;
// Variable to hold the index of current question.
var Losses = 0;
// variable to hold the remaining guesses:
var guessesLeft = 10;
//variable to show what the user has guessed
var YourGuessesSoFar = [];

// var Wins = document.getElementById("wins");
// var Losses = document.getElementById("losses");
// var guessesLeft = document.getElementById("guesses left");
// var YourGuessesSoFar = document.getElementById("your guesses so far");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Calling functions to start the game.
// updateWins();
// updateLosses();
// updateGuessesLeft();
// updateYourGuessesSoFar();


//computer chooses a  random letter from the alaphebet
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);


// user chooses random letter from the alphabet 
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);

    function reset() {
        guessesLeft = 10;
        YourGuessesSoFar = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerGuess);
    }
    // if (options.indexOf(userGuess) > -1) {

    if (userGuess === computerGuess) {
        alert("YOU WIN!")
        wins++;
        guessesLeft = 9;
        reset();


    }
    else if (guessesLeft === 0) {
        alert("You lose")
        numGuesses = 9;
        Losses++;
        YourGuessesSoFar.push(userGuess);
        reset();

    }
    else {
        alert("Try again...")
        guessesLeft--;
        YourGuessesSoFar.push(userGuess);
    }


    // if (guessesLeft === 0) {
    //     confirm("Try again?");
    //     alert("Great!  Let's Play!");
    //     //    reset game here//
    //     reset();
    // } else {
    //     alert("Until next time!");
    // }

    var html = "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + Losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + YourGuessesSoFar.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;

}
