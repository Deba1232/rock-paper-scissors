let resultWindow = document.querySelector('.score-box');

let playerChoiceResult = resultWindow.querySelector('.user-choice-image');
let opponentChoiceResult = resultWindow.querySelector('.opponent-choice-image');

let playerScore = resultWindow.querySelector('.user-score');
let opponentScore = resultWindow.querySelector('.opponent-score');

let resultBox = document.querySelector('.result-box');
let verdict = resultBox.querySelector('.final-result');

let resetButton = resultBox.querySelector('button');

selector.addEventListener('click', gameUI);

function gameUI(e){
    if (e.target.children.length < 3) {                                                      // this condition is given so that even if the gaps between the cards are clicked nothing happens

        if (e.target.nodeName != 'DIV') {                                                    // this condition is given so that we get the image element if the image or the button is clicked

            let childElements = e.target.parentElement.children;

            playerChoiceResult.src = childElements[0].src;
            playerChoiceResult.alt = childElements[0].alt;

            playerScore.textContent = `You: ${playerPoints}`;
        }

        else {                                                                               // this condition is given so that we get the image element when anything other than the image or button is clicked in the cards
            let childElements = e.target.children;

            playerChoiceResult.src = childElements[0].src;
            playerChoiceResult.alt = childElements[0].alt;

            playerScore.textContent = `You: ${playerPoints}`;
        }

        opponentChoiceResult.src = opponentChoiceImage;
        opponentChoiceResult.alt = opponentChoice;

        opponentScore.textContent = `Opponent: ${opponentPoints}`;

        removeClickEvent(playerPoints,opponentPoints);
    }
}

function removeClickEvent(playerPoints, opponentPoints){
    if (playerPoints === 5) {
        selector.removeEventListener('click', gameUI);

        resultBox.style.display = 'block';
        verdict.textContent = 'You win!';
    }

    else if (opponentPoints === 5) {
        selector.removeEventListener('click', gameUI);

        resultBox.style.display = 'block';
        verdict.textContent = 'You lose!';
    }
}

resetButton.addEventListener('click', () => location.reload());