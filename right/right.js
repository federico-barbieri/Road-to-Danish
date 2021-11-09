const ikke = document.querySelector('.ikke');
const vel = document.querySelector('.vel');
const positive = document.querySelector('.positive');
const negative = document.querySelector('.negative');
const frankrig1 = document.querySelector('.frankrig1');
const frankrig2 = document.querySelector('.frankrig2');

const positiveInput = document.querySelector('.positiveInput');
const negativeInput = document.querySelector('.negativeInput');


// EXAMPLES TO PRACTICE

const tyskland = document.querySelector('.tyskland');
const marie = document.querySelector('.marie');
const cykler = document.querySelector('.cykler');
const arbejder = document.querySelector('.arbejder');
const underviser = document.querySelector('.underviser');


let examples = [tyskland, marie, arbejder, cykler, underviser];

// function to choose a random example to practice

const randomPractice = () => {
  return Math.floor(Math.random() * examples.length);
}

// KNOW IF IT IS A POSITIVE OR A NEGATIVE SENTENCE

let positiveOrNegative;

// test button
const testBtn = document.querySelector('.testBtn');

// submit button
const submitBtn = document.querySelector('.submitBtn');

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

  submitBtn.style.display = "inline";
})


// check if the user inserted the correct word

submitBtn.addEventListener('click', (e) =>{
  event.preventDefault();
  console.log(negativeInput.value);
  console.log(positiveOrNegative);
  console.log(positiveInput.value);

  if(positiveOrNegative % 2 == 0 & positiveInput.value.toLowerCase().trim('') == "ikke"){
    console.log("nice");
  } else if (!positiveOrNegative % 2 == 0 & negativeInput.value.toLowerCase().trim('') == "vel"){
    console.log("negative nice");
  } else {
    console.log("mmm");

  }
})
