// POSITIVE ADJECTIVES

let positiveAdj = [["sød", "sødt", "søde"], ["ny", "nyt", "nye"], ["fed", "fedt", "fede"],
                    ["dygtig", "dygtigt", "dygtige"], ["fin", "fint", "fine"], ["hurtig", "hurtigt", "hurtige"],
                    ["sjov", "sjovt", "sjove"], ["langsom", "langsomt", "langsomme"], ["dejlig", "dejligt", "dejlige"],
                    ["kold", "koldt", "kolde"], ["ung", "ungt", "unge"], ["stor", "stort", "store"], ["lang", "langt", "lange"],
                    ["god", "godt", "gode"], ["lille", "lille", "små"], ["gammel", "gammelt", "gamle"],
                    ["praktisk", "praktisk", "praktiske"], ["hjemmelavet", "hjemmelavet", "Hjemmelavede"],
                    ["spændende", "spændende", "spændende"], ["hård", "hårdt", "hårde"], ["lækker", "lækkert", "lækre"],
                    ["vild", "vildt", "vilde"]]

//   æ ø å

//  A FUNCTION THAT SELECTS WHICH FORM WILL BE DISPLAYED

const form1 = document.querySelector('.adjForm1');
const form2 = document.querySelector('.adjForm2');
const form3 = document.querySelector('.adjForm3');


let randomForm = 0;

const selectForm = () => {
  let randomNum = Math.floor((Math.random() * 3) + 1);

  if (randomNum == 1){
    form1.style.display = "flex";
    randomForm = 1;
  } else if (randomNum == 2){
    form2.style.display = "flex";
    randomForm = 2;
  } else {
    form3.style.display = "flex";
    randomForm = 3;
  }
  }


// A FUNCTION THAT RETURNS ONE OF THE ARRAYS FROM THE POSITIVEADJ ARRAY

const positiveArray = () => {
  return Math.floor(Math.random() * positiveAdj.length);
}

// A FUNCTION THAT PLACES EACH ELEMENT OF THE ARRAY IN ONE OF THE INPUTS OF THE FORM IN THE HTML


// all possible positions

const form1pos1 = document.querySelector('.form1pos1');
const form1pos2 = document.querySelector('.form1pos2');
const form1pos3 = document.querySelector('.form1pos3');

const form2pos1 = document.querySelector('.form2pos1');
const form2pos2 = document.querySelector('.form2pos2');
const form2pos3 = document.querySelector('.form2pos3');

const form3pos1 = document.querySelector('.form3pos1');
const form3pos2 = document.querySelector('.form3pos2');
const form3pos3 = document.querySelector('.form3pos3');


// depending on the form, there is one spot that needs to remain empty
// so the user can insert the missing word and practice.

let selectedArray;

const placeElementsInForm = () => {
  selectForm();
  selectedArray = positiveAdj[positiveArray()];

  if(randomForm == 1){
    form1pos1.innerHTML = selectedArray[0];
    form1pos2.innerHTML = selectedArray[1];
  } else if (randomForm == 2){
    form2pos1.innerHTML = selectedArray[0];
    form2pos3.innerHTML = selectedArray[2];
  } else {
    form3pos2.innerHTML = selectedArray[1];
    form3pos3.innerHTML = selectedArray[2];
  }

}

placeElementsInForm();

// COUNTING ATTEMPS, CORRECT WORDS AND MORE

let attempts = 0;
let correctWords = 0;
let wrongWords = 0;


// MECHANISM THAT CHECKS IF YOU INSERTED THE RIGHT WORD

const niceMsg = document.querySelector('.nice');
const nextWordBtn = document.querySelector('.nextWordBtn');
const oops = document.querySelector('.oops');

const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', (e) =>{
  event.preventDefault();
  attempts+=1;

// IF FORM 1, USER INSERTED CORRECT WORD

  if (randomForm == 1 & form1pos3.value.toLowerCase().trim('') == selectedArray[2]){
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    correctWords+=1;
    submitBtn.style.display = "none";
    niceMsg.style.display = "flex";
    nextWordBtn.style.display = "inline";
  }

// IF FORM 1 AND USER INSERTED INCORRECT WORD

  else if (randomForm == 1 & form1pos3.value.toLowerCase().trim('') !== selectedArray[2]){
    wrongWords+=1;
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    submitBtn.style.display = "none";
    oops.style.display = "flex";
    nextWordBtn.style.display = "inline";

  }

// IF FORM 2, CORRECT WORD

  else if (randomForm == 2 & form2pos2.value.toLowerCase().trim('') == selectedArray[1]){
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    correctWords+=1;
    submitBtn.style.display = "none";
    niceMsg.style.display = "flex";
    nextWordBtn.style.display = "inline";
    }

// IF FORM 2 AND INCORRECT WORD

  else if (randomForm == 2 & form2pos2.value.toLowerCase().trim('') !== selectedArray[1]){
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    wrongWords+=1;
    submitBtn.style.display = "none";
    oops.style.display = "flex";
    nextWordBtn.style.display = "inline";

  }

  // IF FORM 3, CORRECT WORD

  else if (randomForm == 3 & form3pos1.value.toLowerCase().trim('') == selectedArray[0]){
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    correctWords+=1;
    submitBtn.style.display = "none";
    niceMsg.style.display = "flex";
    nextWordBtn.style.display = "inline";

  }

  // IF FORM 3, INCORRECT WORD

  else if (randomForm == 3 & form3pos1.value.toLowerCase().trim('') !== selectedArray[0]){
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    wrongWords+=1;
    submitBtn.style.display = "none";
    oops.style.display = "flex";
    nextWordBtn.style.display = "inline";

  }


})

// NEXT WORD EVENT LISTENER

nextWordBtn.addEventListener('click', (e) => {
  event.preventDefault();
  submitBtn.style.display = "inline";
  nextWordBtn.style.display = "none";
  niceMsg.style.display = "none";
  oops.style.display = "none";
  form1pos3.value = "";
  form2pos2.value = "";
  form3pos1.value = "";

  placeElementsInForm();

  // SEE RESULTS AFTER X ATTEMPS

  if (attempts === 5){
    alert(`After 5 attempts, you have ${correctWords} correct words and ${wrongWords} incorrect words.`);}


})






// COMPARATIVE ADJECTIVES


//   æ ø å
