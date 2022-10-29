let selector2 = document.querySelector('.warrior-list');
let resultWindow = document.querySelector('.choices');

let playerChoiceResult = resultWindow.querySelector('.user-choice');
let opponentChoiceResult = resultWindow.querySelector('.opponent-choice');

selector2.addEventListener('click', function(e){

    if (e.target.children.length < 3){                                                      // this condition is given so that even if the gaps between the cards are clicked nothing happens

        if (resultWindow.querySelector('.user-choice img') !== null) {                      // condition for images not stacking side by side
            playerChoiceResult.removeChild(playerChoiceResult.firstElementChild);
            opponentChoiceResult.removeChild(opponentChoiceResult.firstElementChild);

            if (e.target.nodeName != 'DIV') {                                               // this condition is given so that we get the image element if the image or the button is clicked

                let childElements = e.target.parentElement.children;
                playerChoiceResult.insertAdjacentElement('beforeend', childElements[0].cloneNode());

            }

            else {                                                                          // this condition is given so that we get the image element when anything other than the image or button is clicked in the cards
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
        
        let opponentImage = `<img src = ${opponentChoiceImage} alt = ${opponentChoice}></img>`;
        opponentChoiceResult.insertAdjacentHTML('beforeend', opponentImage);

    }
    
});