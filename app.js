
// DANISH LETTERS
// æ ø å


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
  milk: "mælk",
  drink: "drikker",
  kiss: "kysse",
  mother: "moder",
  father: "fader",
  brother: "bror",
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
  knee: "knæ",
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
  ice_cream: "is",
  have: 'har',
  had: 'havde',
  have_had: 'har haft',
  be: 'er',
  was: 'var',
  have_been: 'har vaeret',
  eat: 'spiser',
  ate: 'spiste',
  have_eaten: 'har spist',
  see: 'ser',
  saw: 'så',
  have_seen: 'har set',
  travel: 'rejser',
  travelled: 'rejste',
  have_travelled: 'har rejst',
  take: 'tager',
  took: 'tog',
  have_taken: 'har taget',
  run: 'løber',
  ran: 'løb',
  have_run: 'har løbet',
  live: 'bor',
  lived: 'boed',
  have_lived: 'har boet',
  move: 'flytter',
  moved: 'flyttede',
  have_moved: 'har flyttet',
  think: 'tror',
  thought: 'troede',
  have_thought: 'har troet',
  do: 'gør',
  did: 'gjorde',
  have_done: 'har gjort',
  mean: 'betyder',
  meant: 'betød',
  have_meant: 'har betydet',
  work: 'arbejder',
  worked: 'arbejdede',
  have_worked: 'har arbejdet',
  tell: 'fortæller',
  told: 'fortalte',
  have_told: 'har fortalt',
  play: 'spiller',
  played: 'spillede',
  have_played: 'har spillet',
  read_present: 'læser',
  read_past: 'læste',
  have_read: 'har læst',
  swim: 'svømmer',
  swam: 'svømmede',
  have_swam: 'har svømmet',
  draw: 'tegner',
  drew: 'tegnede',
  have_drawn: 'har tegnet',
  love: 'elsker',
  loved: 'elskede',
  have_loved: 'har elsket',
  hate: 'hader',
  hated: 'hadede',
  have_hated: 'har hadet'


}


// length of my object
var lengthOfObject = Object.keys(learntWords).length;

// MAIN title
const mainTitle = document.querySelector('.roadToDanish');
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
// view results button
var viewResultsBtn = document.querySelector('.view-results');
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
  mainTitle.style.display = 'none';
  form.style.display = "flex";
  practiceBtn.style.display = "none";
  viewResultsBtn.style.display = 'none';

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

  if ((danishWord.value.toLowerCase()) === Object.values(learntWords)[counter]){

      alert("NICEEEEE!");
      correctWords+=1;
    } else {
        alert("not so nice");
        alert("Correct word: " + Object.values(learntWords)[counter]);
      }
    nextWordBtn.style.zIndex = "1";
    nextWordBtn.style.opacity = "1";
    danishWord.value = "";

    if (counter == 10){
      viewResultsBtn.style.display = 'absolute';
    }
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



// counter for the amount of correct words
var correctWords = 0;

// event listener to view results
viewResultsBtn.addEventListener('click', () => {
  if (correctWords == 0){
    alert("Oh, you had 0 correct words")
  } else if (correctWords == 1){
    alert('Congratulations! You had 1 correct word today')
  } else {
  alert("Congratulations! You had " + correctWords + " correct words today!")
}
})
