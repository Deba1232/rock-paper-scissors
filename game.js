let game = (userChoice, opponentChoice) => {
    
    if(userChoice === opponentChoice)
        return 'Draw';

    else if (userChoice === 'ROCK' && opponentChoice === 'PAPER')
        return 'You lost';

    else if (userChoice === 'ROCK' && opponentChoice === 'SCISSORS')
        return 'You win';

    else if (userChoice === 'PAPER' && opponentChoice === 'ROCK')
        return 'You win';

    else if (userChoice === 'PAPER' && opponentChoice === 'SCISSORS')
        return 'You lost';

    else if (userChoice === 'SCISSORS' && opponentChoice === 'ROCK')
        return 'You lost';

    else if (userChoice === 'SCISSORS' && opponentChoice === 'PAPER')
        return 'You win';

    else
        return 'You made an invalid choice';
};

const opponentOptions = ['Rock','Paper','Scissors'];

let image = new Image();
const images = [image.src = './images/rock.png', image.src = './images/paper.png', image.src = './images/scissor.png']

let randomChoice; 
let userChoice;
let opponentChoice;
let opponentChoiceImage;

let playerPoints = 0;
let opponentPoints = 0;

let playCount = 0;

let selector = document.querySelector('.warrior-list');

selector.addEventListener('click', function(e) {

    if (e.target.children.length < 3){

        if (e.target.alt !== undefined) {
            userChoice = e.target.alt;
        }

        else {
            userChoice = e.target.textContent.replace(/\s/g, '');
        }

        console.log(userChoice);

        randomChoice = Math.floor(Math.random() * opponentOptions.length);
        
        opponentChoice = opponentOptions[randomChoice];
        opponentChoiceImage = images[randomChoice];

        let result = game(userChoice.toUpperCase(), opponentChoice.toUpperCase());

        console.log(opponentChoice, result);

        if (result === 'You win') {
            playerPoints++;
        }

        else if (result === 'You lost') {
            opponentPoints++;
        }

        else {
            console.log('No points added');
        }


        console.log(`Your Score : ${playerPoints}\nOpponent's score : ${opponentPoints}`);

    }
    

});


function result(playerPoints, opponentPoints){
    if (playerPoints > opponentPoints)
        console.log("You win!");

    else if (playerPoints < opponentPoints)
        console.log("You lost!");

    else
        console.log("It's a draw!");
}








/* for (i=0;i<5;i++){
    
    
    console.log(userChoice);

    randomChoice = Math.floor(Math.random() * opponentOptions.length);
    opponentChoice = opponentOptions[randomChoice];

    let result = game(userChoice.toUpperCase(), opponentChoice.toUpperCase());

    // console.log(opponentChoice,result);

    if (result === 'You win')
        playerPoints++;

    else if (result === 'You lost')
        opponentPoints++;

    else
        console.log('No points added');
}

console.log(`Your Score : ${playerPoints}\nOpponent's score : ${opponentPoints}`);

if (playerPoints > opponentPoints)
    console.log("You win!");

else if (playerPoints < opponentPoints)
    console.log("You lost!");

else
    console.log("It's a draw!"); */