

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
  milk: "mælk",
}


/* how it works

if you press "practice" you'll have the word in english on one side
and a box for the input. if the word you put matches the word in english then you get a "nice!"
if you miss 3 times the word disappears and you have to "relearn it".
*/


// practice button

const practiceBtn = document.querySelector(".practice");

// new word button

const newWord = document.querySelector(".addNewWord");

// form
const form = document.querySelector('.formu-juego');

// english word input

var englishWord = document.querySelector(".english-word");

// event listener to practice

practiceBtn.addEventListener('click', () => {
  form.style.opacity = "1";
  practiceBtn.style.opacity = "0";
  newWord.style.opacity = "0";
  englishWord.innerHTML = Object.keys(learntWords[0]);

})
