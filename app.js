


// object with learnt words

var learntWords = {
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
  milk: "maelk",
  drink: "drikke",
  kiss: "kysse",
  mother: "moder",
  father: "fader",
  brother: "broder",
  sister: "søster",
  cat: "kat",
  fish: "fisk",
  mouse: "mus",
  cow: "ko",
  lamb: "lam",
  horse: "hest",
  pig: "svin",
  bird: "fugl",
  dog: "hund",
  animal: "dyr",
  arm: "arm",
  finger: "finger",
  knee: "knae",
  foot: "fod",
  hair: "hår",
  house: "hus",
  door: "dør",
  monday: "mandag",
  tuesday: "tirsdag",
  wednesday: "onsdag",
  thursday: "torsdag",
  friday: "fredag",
  saturday: "lørdag",
  sunday: "søndag",
  january: "januar",
  february: "februar",
  march: "marts",
  april: "april",
  may: "maj",
  june: "juni",
  july: "juli",
  august: "august",
  september: "september",
  october: "oktober",
  november: "november",
  december: "december",
  city: "by",
  street: "gade",
  airport: "lufthavn",
  hotel: "hotel",
  restaurant: "restaurant",
  church: "kirke",
  market: "marked",
  hospital: "hospital",
  university: "universitet",
  school: "skole",
  book: "bog",
  window: "vindue",
  color: "farve",
  red: "rød",
  blue: "blå",
  green: "grøn",
  yellow: "gul",
  black: "sort",
  white: "hvid",
  sea: "hav",
  river: "flod",
  lake: "sø",
  mountain: "bjerg",
  rain: "regn",
  snow: "sne",
  tree: "trae",
  flower: "blomst",
  sun: "sol",
  moon: "måne",
  wind: "vind",
  sky: "himmel",
  fire: "ild",
  ice: "is"

}

// length of my object
var lengthOfObject = Object.keys(learntWords).length;

//
//

// practice button
const practiceBtn = document.querySelector(".practice");
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
//next word button
const nextWordBtn = document.querySelector(".next-word-btn");

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
  practiceBtn.style.display = "none";

})


// counter that glues A: the position of the word in the object with B: the position of the key as a danish word
var counter = 0;

//


// event listener after pressing "start"
practiceStartBtn.addEventListener('click', () =>{

  var randomNum = randomWord();
  englishWord.innerHTML = "English word: " + Object.keys(learntWords)[randomNum];
  counter = randomNum;
  practiceStartBtn.style.zIndex = "-1";
  practiceStartBtn.style.opacity= "0";
})
//
//
// event listener to submit your word

submitBtn.addEventListener('click', (e)=> {
  event.preventDefault();

  if (danishWord.value === Object.values(learntWords)[counter]){

      alert("NICEEEEE!");
      correctWords+=1;
    } else {
        alert("not so nice");
        alert("Correct word: " + Object.values(learntWords)[counter]);
      }
    nextWordBtn.style.zIndex = "1";
    nextWordBtn.style.opacity = "1";
    danishWord.value = "";
})

// event listener for next-word

nextWordBtn.addEventListener('click', (e)=> {
  event.preventDefault();

    var randomNum = randomWord();
  englishWord.innerHTML = "English word: " + Object.keys(learntWords)[randomNum];
  counter = randomNum;
})





//
//
// view results

// view results button
var viewResultsBtn = document.querySelector('.view-results');

// counter for the amount of correct words
var correctWords = 0;

// event listener to view results
viewResultsBtn.addEventListener('click', () => {
  if (correctWords == 0){
    alert("Oh, you had 0 correct words")
  } else {
  alert("Congratulations! You had " + correctWords + " correct words!")
}
})
