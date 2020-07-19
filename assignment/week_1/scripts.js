let button = document.getElementById('guessButton')
let result = document.getElementById("result")
let pastGuessesSpan = document.getElementById('pastGuesses')
let min = 0, max = 10
let limitGuess = 10
let pastGuesses = []
let rand = getRandomInt(min, max) 
console.log(rand)

function getUserGuess() {
    let userGuess = parseInt(document.getElementById('number').value);
    pastGuesses.push(userGuess)
    pastGuessesSpan.innerHTML = pastGuesses
    limitGuess = limitGuess-1
    if(limitGuess < 0) {
        alert("YOU HAVE RUN OUT OF GUESSES!!!")
        limitGuess = 10
        pastGuesses = []
        pastGuessesSpan.innerHTML = pastGuesses
        result.innerHTML = ""
        return 
    }
    console.log("limitGuess", limitGuess) 
    let check =  userGuess - rand    
    checkMatch(check)
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function checkMatch(check) {
    if(check == 0) {
        result.innerHTML = "Congratulations!! You guessed correctly."
        result.style.backgroundColor = "lightgreen"
    } else if (check > 0) {
        result.innerHTML = "Sorry your guess is too high. You have " + limitGuess + " guesses left." 
        result.style.backgroundColor = "red"
    } else if (check < 0) {
        result.innerHTML = "Sorry your guess is too low. You have " + limitGuess + " guesses left."
        result.style.backgroundColor = "red"
    }   
}

button.addEventListener('click', getUserGuess)