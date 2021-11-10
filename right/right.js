const ikke = document.querySelector('.ikke');
const vel = document.querySelector('.vel');
const positive = document.querySelector('.positive');
const negative = document.querySelector('.negative');
const frankrig1 = document.querySelector('.frankrig1');
const frankrig2 = document.querySelector('.frankrig2');


// EXAMPLES TO PRACTICE

let tyskland = document.querySelector('.tyskland');
let marie = document.querySelector('.marie');
let cykler = document.querySelector('.cykler');
let arbejder = document.querySelector('.arbejder');
let underviser = document.querySelector('.underviser');
let endnu = document.querySelector('.endnu');
let single = document.querySelector('.single');
let norreport = document.querySelector('.norreport');
let fredag = document.querySelector('.fredag'); 


// IKKE BTNS

let ikkeBTN = document.querySelector('.ikkeBTN');
// VEL BTNS

let velBTN = document.querySelector('.velBTN');

// NEXT BTN

const nextBtn = document.querySelector('.nextBtn');


let examples = [tyskland, marie, arbejder, cykler, underviser, endnu, single, fredag];

// function to choose a random example to practice

const randomPractice = () => {
  return Math.floor(Math.random() * examples.length);
}

// KNOW IF IT IS A POSITIVE OR A NEGATIVE SENTENCE

let positiveOrNegative;

// test button
let testBtn = document.querySelector('.testBtn');


testBtn.addEventListener('click', () =>{

  // display none to everything previous to practicing
  ikke.style.display = "none";
  vel.style.display = "none";
  positive.style.display = "none";
  negative.style.display = "none";
  frankrig1.style.display = "none";
  frankrig2.style.display = "none";
  testBtn.style.display = "none";

  // display one of the examples from the array by calling the function

  positiveOrNegative = randomPractice();
  examples[positiveOrNegative].style.display = "flex";
  ikkeBTN.style.display = "inline";
  velBTN.style.display = "inline";
  console.log(positiveOrNegative);

})

// correct words, incorrect words and attempts

let correctWords = 0;
let incorrectWords = 0;
let attempts = 0;

// event listeners for the btns

ikkeBTN.addEventListener('click', (e) =>{
  event.preventDefault();
  nextBtn.style.display = "block";

   if (positiveOrNegative % 2 == 0){

     console.log("NICE");
     correctWords+=1;
      attempts+=1;
     ikkeBTN.style.backgroundColor = "green";
   } else{
     console.log("WRONG");
     incorrectWords+=1;
      attempts+=1;
     ikkeBTN.style.backgroundColor = "red";
   }
 })

 velBTN.addEventListener('click', (e) => {
   event.preventDefault();
   nextBtn.style.display = "block";

    if (positiveOrNegative % 2 !== 0){


      correctWords+=1;
       attempts+=1;
      velBTN.style.backgroundColor = "green";
    } else{

      incorrectWords+=1;
       attempts+=1;
      velBTN.style.backgroundColor = "red";
    }
 })

// check if the user picked the correct btn


 nextBtn.addEventListener('click', () => {
   nextBtn.style.display = "none";
   examples[positiveOrNegative].style.display = "none";
   ikkeBTN.style.backgroundColor = "transparent";
   velBTN.style.backgroundColor = "transparent";

   positiveOrNegative = randomPractice();
   examples[positiveOrNegative].style.display = "flex";
   console.log(positiveOrNegative);

   if (attempts === 5){
     alert(`After 5 attempts, you got ${correctWords} correct words and ${incorrectWords} incorrect words.`);}

 })
