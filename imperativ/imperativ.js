

const frequentBtn = document.querySelector('.frequentBtn');
const table = document.querySelector('.table');
const mainTitle = document.querySelector('.mainTitle');
const descriptionP = document.querySelector('.descriptionP');
const expressionSpans = document.querySelector('.expressionSpans');

// spans

const sleep = document.querySelector('.sleep');
const sweet = document.querySelector('.sweet');
const nice = document.querySelector('.nice');
const write = document.querySelector('.write');
const drive = document.querySelector('.drive');
const call = document.querySelector('.call');
const come = document.querySelector('.come');


// frequent expressions event listener


frequentBtn.addEventListener('click', () => {
  mainTitle.style.display = "none";
  descriptionP.style.display = "none";
  table.style.display = "none";
  frequentBtn.style.display = "none";
  expressionSpans.style.display = "flex";
})

// event listeners for each span to toggle its innerHTML on hover (last one is on click for mobile)

// sleep
sleep.addEventListener('mouseover', () => {
  sleep.innerHTML = "Sov godt";
})

sleep.addEventListener('mouseout', () => {
  sleep.innerHTML = "Sleep well";
})

sleep.addEventListener('click', () => {
  sleep.innerHTML = "Sov godt";
})

// sweet
sweet.addEventListener('mouseover', () => {
  sweet.innerHTML = "Drøm sødt";
})

sweet.addEventListener('mouseout', () => {
  sweet.innerHTML = "Sweet dreams";
})

sweet.addEventListener('click', () => {
  sweet.innerHTML = "Drøm sødt";
})

// nice
nice.addEventListener('mouseover', () => {
  nice.innerHTML = "Hav en god dag";
})

nice.addEventListener('mouseout', () => {
  nice.innerHTML = "Have a nice day";
})

nice.addEventListener('click', () => {
  nice.innerHTML = "Hav en god dag";
})

// write
write.addEventListener('mouseover', () => {
  write.innerHTML = "Skriv snart";
})

write.addEventListener('mouseout', () => {
  write.innerHTML = "Write soon";
})

write.addEventListener('click', () => {
  write.innerHTML = "Skriv snart";
})

// drive
drive.addEventListener('mouseover', () => {
  drive.innerHTML = "Kør forsigtigt";
})

drive.addEventListener('mouseout', () => {
  drive.innerHTML = "Drive carefully";
})

drive.addEventListener('click', () => {
  drive.innerHTML = "Kør forsigtigt";
})

// call
call.addEventListener('mouseover', () => {
  call.innerHTML = "Ring til mig";
})

call.addEventListener('mouseout', () => {
  call.innerHTML = "Call me";
})

call.addEventListener('click', () => {
  call.innerHTML = "Ring til mig";
})

// come
come.addEventListener('mouseover', () => {
  come.innerHTML = "Kom indenfor";
})

come.addEventListener('mouseout', () => {
  come.innerHTML = "Come in";
})

come.addEventListener('click', () => {
  come.innerHTML = "Kom indenfor";
})
