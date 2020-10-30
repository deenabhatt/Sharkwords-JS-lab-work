const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//
const createDivsForChars = (word) => {

  for(const letter in word){
    $('#word-container').append(`<div class="letter-box ${letter}"></div>`)
  }
  // Replace this with your code
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  // Replace this with your code
  for(const letter in ALPHABET){
    //<button>a</button>
    $('#letter-buttons').append(`<a class="letter-button ${letter}"> ${letter }</a>`)
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // const button = $(buttonEl);
  document.getElementById("buttonEl").disabled=true;

};

// Return `true` if `letter` is in the word.
//section:#word-container  ".letter-box s"
const isLetterInWord = (letter) => {
  // Replace this with your code
  const word=document.querySelector("#word-container");
  let count=0;
  if(word.contains(letter))
  for(lettr in word){
    if (lettr===letter){
      return true;
    }
  }
    
    };

    // document.querySelector('#word-container')
    // .classList.contains('f.letter-box ${letter}');
  


// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // Replace this with your code
};

// Called when `letter` is not in word.
//
// If the shark gets the person, disable all buttons and show the "play again"
// message. Otherwise, increment `numWrong` and update the shark image.
//
const handleWrongGuess = () => {
  // Replace this with your code
};

//  Reset game state. Called before restarting the game.
//
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
  });
})();
