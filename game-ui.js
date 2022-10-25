let selector2 = document.querySelector('.warrior-list');
let resultWindow = document.querySelector('.result-window');

let playerChoiceResult = resultWindow.querySelector('.user-choice');
let opponentChoiceResult = resultWindow.querySelector('.opponent-choice');

selector2.addEventListener('click', function(e){

    if (e.target.children.length < 3){

        if (resultWindow.querySelector('.user-choice img') !== null) {
            playerChoiceResult.removeChild(playerChoiceResult.firstElementChild);

            if (e.target.nodeName != 'DIV') {

                let childElements = e.target.parentElement.children;
                playerChoiceResult.insertAdjacentElement('beforeend', childElements[0].cloneNode());

            }

            else {
                let childElements = e.target.children;
                playerChoiceResult.insertAdjacentElement('beforeend', childElements[0].cloneNode());
            }
        }

        else {

            if (e.target.nodeName != 'DIV') {

                let childElements = e.target.parentElement.children;
                playerChoiceResult.insertAdjacentElement('beforeend', childElements[0].cloneNode());

            }

            else {
                let childElements = e.target.children;
                playerChoiceResult.insertAdjacentElement('beforeend', childElements[0].cloneNode());
            }

        }

    }
    

    
});