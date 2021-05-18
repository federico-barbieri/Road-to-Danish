


// object with learnt words

const learntWords = {
  knive: "kniv",
  fork: "gaffel",
  spoon: "ske",
  plate: "tallerken",
  napkin: "serviet",
  chair: "stol",
  table: "bord",
  face: "ansigt",
  cup: "kop",
  coffee: "kaffe",
  milk: "mælk"

}

// length of my object
var lengthOfObject = Object.keys(learntWords).length;

//
//

// practice button
const practiceBtn = document.querySelector(".practice");
//
// new word button
const newWord = document.querySelector(".addNewWord");

//
//
//

// form
const form = document.querySelector('.formu-juego');


// start practicing button
var practiceStartBtn = document.querySelector(".start-practice");
//
//
// danish word input
var danishWord = document.querySelector(".danish-word");
//
// english word
var englishWord = document.querySelector(".given-english-word");
//
//submit your word button
var submitBtn = document.querySelector(".submit-btn-form");
//
//
// random number to get a random word from the learnt words
function randomWord(){
  return Math.floor(Math.random() * lengthOfObject);
}

//
//
//
// event listener to practice
practiceBtn.addEventListener('click', () => {
  form.style.opacity = "1";
  practiceBtn.style.opacity = "0";
  newWord.style.opacity = "0";
})


// counter that glues A: the position of the word in the object with B: the position of the key as a danish word
var counter = 0;

//


// event listener after pressing "start"
practiceStartBtn.addEventListener('click', () =>{

  var randomNum = randomWord();
  englishWord.innerHTML = "English word: " + Object.keys(learntWords)[randomNum];
  counter = randomNum;
})
//
//
// event listener to submit your word

submitBtn.addEventListener('click', (e)=> {
  event.preventDefault();

  if (danishWord.value == Object.values(learntWords)[counter]){

      alert("NICEEEEE!");
      correctWords+=1;
    } else {
        alert("not so nice");
      }
})

//
//
// view results

// view results button
var viewResultsBtn = document.querySelector('.view-results');

// counter for the amount of correct words
var correctWords = 0;

viewResultsBtn.addEventListener('click', () => {

  alert("Congratulations! You had " + correctWords + " correct words!")

})
