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


// IKKE BTNS

const ikkeBtn1 = document.querySelector('.ikkeBtn1');
const ikkeBtn2 = document.querySelector('.ikkeBtn2');
const ikkeBtn3 = document.querySelector('.ikkeBtn3');
const ikkeBtn4 = document.querySelector('.ikkeBtn4');
const ikkeBtn5 = document.querySelector('.ikkeBtn5');

// VEL BTNS

const velBtn1 = document.querySelector('.velBtn1');
const velBtn2 = document.querySelector('.velBtn2');
const velBtn3 = document.querySelector('.velBtn3');
const velBtn4 = document.querySelector('.velBtn4');
const velBtn5 = document.querySelector('.velBtn5');

// NEXT BTN

const nextBtn = document.querySelector('.nextBtn');


let examples = [tyskland, marie, arbejder, cykler, underviser];

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
  console.log(positiveOrNegative);

})

// correct words, incorrect words and attempts

let correctWords = 0;
let incorrectWords = 0;
let attempts = 0;


// check if the user picked the correct btn

ikkeBtn1.addEventListener('click', (e) =>{
  event.preventDefault();
  nextBtn.style.display = "inline";

   if(positiveOrNegative == 0 || positiveOrNegative == 2 || positiveOrNegative == 4){
     console.log("NICE");
     correctWords+=1;
      attempts+=1;
     ikkeBtn1.style.backgroundColor = "green";
   } else{
     console.log("WRONG");
     incorrectWords+=1;
     attempts+=1;
     ikkeBtn1.style.backgroundColor = "red";
   }
 })


 ikkeBtn2.addEventListener('click', (e) =>{
   event.preventDefault();
   nextBtn.style.display = "inline";

    if(positiveOrNegative == 0 || positiveOrNegative == 2 || positiveOrNegative == 4){
      console.log("NICE");
      correctWords+=1;
       attempts+=1;
      ikkeBtn2.style.backgroundColor = "green";
    } else{
      console.log("WRONG");
      incorrectWords+=1;
       attempts+=1;
      ikkeBtn2.style.backgroundColor = "red";
    }
  })



  ikkeBtn3.addEventListener('click', (e) =>{
    event.preventDefault();
    nextBtn.style.display = "inline";

     if(positiveOrNegative == 0 || positiveOrNegative == 2 || positiveOrNegative == 4){
       console.log("NICE");
       correctWords+=1;
        attempts+=1;
       ikkeBtn3.style.backgroundColor = "green";
     } else{
       console.log("WRONG");
       incorrectWords+=1;
        attempts+=1;
       ikkeBtn3.style.backgroundColor = "red";
     }
   })



   ikkeBtn4.addEventListener('click', (e) =>{
     event.preventDefault();
     nextBtn.style.display = "inline";

      if(positiveOrNegative == 0 || positiveOrNegative == 2 || positiveOrNegative == 4){
        console.log("NICE");
        correctWords+=1;
         attempts+=1;
        ikkeBtn4.style.backgroundColor = "green";
      } else{
        console.log("WRONG");
        incorrectWords+=1;
         attempts+=1;
        ikkeBtn4.style.backgroundColor = "red";
      }
    })



    ikkeBtn5.addEventListener('click', (e) =>{
      event.preventDefault();
      nextBtn.style.display = "inline";

       if(positiveOrNegative == 0 || positiveOrNegative == 2 || positiveOrNegative == 4){
         console.log("NICE");
         correctWords+=1;
          attempts+=1;
         ikkeBtn5.style.backgroundColor = "green";
       } else{
         console.log("WRONG");
         incorrectWords+=1;
          attempts+=1;
         ikkeBtn5.style.backgroundColor = "red";
       }
     })

 velBtn1.addEventListener('click', (e) => {
   event.preventDefault();
   nextBtn.style.display = "inline";

    if(positiveOrNegative == 1 || positiveOrNegative == 3){
      console.log("NICE");
      correctWords+=1;
       attempts+=1;
      velBtn1.style.backgroundColor = "green";
    } else{
      console.log("WRONG");
      incorrectWords+=1;
       attempts+=1;
      velBtn1.style.backgroundColor = "red";
    }
 })

 velBtn2.addEventListener('click', (e) => {
   event.preventDefault();
   nextBtn.style.display = "inline";

    if(positiveOrNegative == 1 || positiveOrNegative == 3){
      console.log("NICE");
      correctWords+=1;
       attempts+=1;
      velBtn2.style.backgroundColor = "green";
    } else{
      console.log("WRONG");
      incorrectWords+=1;
       attempts+=1;
      velBtn2.style.backgroundColor = "red";
    }
 })

 velBtn2.addEventListener('click', (e) => {
   event.preventDefault();
   nextBtn.style.display = "inline";

    if(positiveOrNegative == 1 || positiveOrNegative == 3){
      console.log("NICE");
      correctWords+=1;
       attempts+=1;
      velBtn2.style.backgroundColor = "green";
    } else{
      console.log("WRONG");
      incorrectWords+=1;
       attempts+=1;
      velBtn2.style.backgroundColor = "red";
    }
 })

 velBtn3.addEventListener('click', (e) => {
   event.preventDefault();
   nextBtn.style.display = "inline";

    if(positiveOrNegative == 1 || positiveOrNegative == 3){
      console.log("NICE");
      correctWords+=1;
       attempts+=1;
      velBtn3.style.backgroundColor = "green";
    } else{
      console.log("WRONG");
      incorrectWords+=1;
       attempts+=1;
      velBtn3.style.backgroundColor = "red";
    }
 })

 velBtn4.addEventListener('click', (e) => {
   event.preventDefault();
   nextBtn.style.display = "inline";

    if(positiveOrNegative == 1 || positiveOrNegative == 3){
      console.log("NICE");
      correctWords+=1;
       attempts+=1;
      velBtn4.style.backgroundColor = "green";
    } else{
      console.log("WRONG");
      incorrectWords+=1;
       attempts+=1;
      velBtn4.style.backgroundColor = "red";
    }
 })

 velBtn5.addEventListener('click', (e) => {
   event.preventDefault();
   nextBtn.style.display = "inline";

    if(positiveOrNegative == 1 || positiveOrNegative == 3){
      console.log("NICE");
      correctWords+=1;
       attempts+=1;
      velBtn5.style.backgroundColor = "green";
    } else{
      console.log("WRONG");
      incorrectWords+=1;
       attempts+=1;
      velBtn5.style.backgroundColor = "red";
    }
 })

 nextBtn.addEventListener('click', () => {
   nextBtn.style.display = "none";
   examples[positiveOrNegative].style.display = "none";
   ikkeBtn1.style.backgroundColor = "transparent";
   ikkeBtn2.style.backgroundColor = "transparent";
   ikkeBtn3.style.backgroundColor = "transparent";
   ikkeBtn4.style.backgroundColor = "transparent";
   ikkeBtn5.style.backgroundColor = "transparent";
   velBtn1.style.backgroundColor = "transparent";
   velBtn2.style.backgroundColor = "transparent";
   velBtn3.style.backgroundColor = "transparent";
   velBtn4.style.backgroundColor = "transparent";
   velBtn5.style.backgroundColor = "transparent";

   positiveOrNegative = randomPractice();
   examples[positiveOrNegative].style.display = "flex";
   console.log(positiveOrNegative);

   if (attempts === 5){
     alert(`After 5 attempts, you got ${correctWords} correct words and ${incorrectWords} incorrect words.`);}
   
 })
