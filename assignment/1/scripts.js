let button = document.getElementById('guessButton')
let min = 0, max = 10
let rand = getRandomInt(min, max) 
console.log(rand)

function getUserGuess() {
    let userGuess = parseInt(document.getElementById('number').value);
    let check =  userGuess - rand    
    checkMatch(check)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkMatch(check) {
    let result = document.getElementById("result")
    if(check == 0) {
        result.innerHTML = "Congratulations!! You guessed correctly"
    } else if (check > 0) {
        result.innerHTML = "Sorry your guess is too high"
    } else if (check < 0) {
        result.innerHTML = "Sorry your guess is too low"
    }   
}

button.addEventListener('click', getUserGuess)