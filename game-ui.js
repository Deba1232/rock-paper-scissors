// let selector = document.querySelector('.warrior-list');
let resultWindow = document.querySelector('.score-box');

let playerChoiceResult = resultWindow.querySelector('.user-choice-image');
let opponentChoiceResult = resultWindow.querySelector('.opponent-choice-image');

selector.addEventListener('click', function (e) {

    if (e.target.children.length < 3) {                                                      // this condition is given so that even if the gaps between the cards are clicked nothing happens

        if (e.target.nodeName != 'DIV') {

            let childElements = e.target.parentElement.children;
            playerChoiceResult.src = childElements[0].src;
            playerChoiceResult.alt = childElements[0].alt;
        
        }

        else {
            let childElements = e.target.children;
            playerChoiceResult.src = childElements[0].src;
            playerChoiceResult.alt = childElements[0].alt;
        }
        
        opponentChoiceResult.src = opponentChoiceImage;
        opponentChoiceResult.alt = opponentChoice;

    }

});