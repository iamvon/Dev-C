import CHOICES from '../components/ChoiceButtons/choices'

const getRoundOutcome = (userChoice, computerChoice) => {
    let result;

    if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }

    if (userChoice === computerChoice) result = 'Tie game!';
    return result;
};

const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)]

export { getRoundOutcome, randomComputerChoice } 