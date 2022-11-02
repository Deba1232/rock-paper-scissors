let game = (userChoice, opponentChoice) => {
    
    if(userChoice === opponentChoice)
        return 'Draw';

    else if (userChoice === 'ROCK' && opponentChoice === 'PAPER')
        return 'You lost';

    else if (userChoice === 'ROCK' && opponentChoice === 'SCISSORS')
        return 'You won';

    else if (userChoice === 'PAPER' && opponentChoice === 'ROCK')
        return 'You won';

    else if (userChoice === 'PAPER' && opponentChoice === 'SCISSORS')
        return 'You lost';

    else if (userChoice === 'SCISSORS' && opponentChoice === 'ROCK')
        return 'You lost';

    else if (userChoice === 'SCISSORS' && opponentChoice === 'PAPER')
        return 'You won';

    else
        return 'You made an invalid choice';
};

let randomChoice;
let userChoice;
let opponentChoice;
let opponentChoiceImage;

let opponentOptions = ['Rock','Paper','Scissors'];

let image = new Image();
let images = [image.src = './images/rock.png', image.src = './images/paper.png', image.src = './images/scissor.png']

let playerPoints = 0;
let opponentPoints = 0;

let selector = document.querySelector('.warrior-list');

let subTextSelector = document.querySelector('.sub-text');

selector.addEventListener('click', scoreSystem);

function scoreSystem(e) {

    if (e.target.children.length < 3) {

        if (e.target.alt !== undefined) {
            userChoice = e.target.alt;
        }

        else {
            userChoice = e.target.textContent.replace(/\s/g, '');
        }

        randomChoice = Math.floor(Math.random() * opponentOptions.length);

        opponentChoice = opponentOptions[randomChoice];
        opponentChoiceImage = images[randomChoice];

        let result = game(userChoice.toUpperCase(), opponentChoice.toUpperCase());

        if (result === 'You won') {
            playerPoints++;
            subTextSelector.textContent = 'You won';
            subTextSelector.innerHTML += `<p>${userChoice} beats ${opponentChoice}</p>`;
        }

        else if (result === 'You lost') {
            opponentPoints++;
            subTextSelector.textContent = 'You lost';
            subTextSelector.innerHTML += `<p>${userChoice} is beaten by ${opponentChoice}</p>`;
        }

        else {
            subTextSelector.textContent = 'It\'s a tie';
            subTextSelector.innerHTML += '<p>Same choices were made</p>';
        }

        finalScore(playerPoints, opponentPoints);
    
    }

}

function finalScore(playerPoints, opponentPoints) {
    if (playerPoints === 5) {
        selector.removeEventListener('click', scoreSystem);
    }


    else if (opponentPoints === 5) {
        selector.removeEventListener('click', scoreSystem);
    }

}