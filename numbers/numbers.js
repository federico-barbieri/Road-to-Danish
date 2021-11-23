
let numbers = {
  one: "en",
  two: "to",
  three: "tre",
  four: "fire",
  five: "fem",
  six: "seks",
  seven: "syv",
  eight: "otte",
  nine: "ni",
  ten: "ti",
  eleven: "elleve",
  twelve: "tolv",
  thirteen: "tretten",
  fourteen: "fjorten",
  fifteen: "femten",
  sixteen: "seksten",
  seventeen: "sytten",
  eighteen: "atten",
  nineteen: "nitten",
  twenty: "tyve",
  twenty_one: "enogtyve",
  twenty_two: "toogtyve",
  twenty_three: "treogtyve",
  twenty_four: "fireogtyve",
  twenty_five: "femogtyve",
  twenty_six: "seksogtyve",
  twenty_seven: "syvogtyve",
  twenty_eight: "ooteogtyve",
  twenty_nine: "niogtyve",
  thirty: "tredive"
}

let fromRandomToStable;


let randomNumGenerator = () => {
  return Math.floor(Math.random() * Object.keys(numbers).length);
}



// form
const form = document.querySelector('.form');

// input
const input = document.querySelector('.danishNum');

// label

const label = document.querySelector('.label');

// start btn

const startBtn = document.querySelector('.startBtn');

// submit btn

const submitBtn = document.querySelector('.submitBtn');

// nice and oops message

const niceMsg = document.querySelector('.nice');

const oops = document.querySelector('.oops');

const correction = document.querySelector('.correction');

// next btn

const nextBtn = document.querySelector('.nextBtn');

// correct words, wrong words and attempts

let correctWords = 0;
let wrongWords = 0;
let attempts = 0;

// startBtn event listener

startBtn.addEventListener('click', () => {
  startBtn.style.display = "none";
  form.style.display = "flex";
  fromRandomToStable = randomNumGenerator();
  label.innerHTML = Object.keys(numbers)[fromRandomToStable];
  submitBtn.style.display = "inline";
})

// submit btn event listener

submitBtn.addEventListener('click', () => {
  attempts+=1;
  submitBtn.style.display = "none";
  form.style.display = "none";

  if (input.value.toLowerCase().trim('') === Object.values(numbers)[fromRandomToStable]){
    niceMsg.style.display = "flex";
    nextBtn.style.display = "inline";
    correctWords+=1;
  } else {
    oops.style.display = "flex";
    correction.innerHTML = `Correct word: ${Object.values(numbers)[fromRandomToStable]}.`;
    nextBtn.style.display = "inline";
    wrongWords+=1;
  }

})

// nextBtn event

nextBtn.addEventListener('click', () => {
  nextBtn.style.display = "none";
  input.value = "";
  niceMsg.style.display = "none";
  oops.style.display = "none";
  form.style.display = "flex";
  fromRandomToStable = randomNumGenerator();
  label.innerHTML = Object.keys(numbers)[fromRandomToStable];
  submitBtn.style.display = "inline";

  if (attempts == 5){
    alert(`After 5 attempts you have ${correctWords} correct words and ${wrongWords} incorrect words.`);
  }

})
