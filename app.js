const cards = document.querySelectorAll('.card');
const points = document.querySelector('.points');
const clicks = document.querySelector('.clicks')
const spock1 = document.querySelector('.spock1');
const spock2 = document.querySelector('.spock2');
const spock3 = document.querySelector('.spock3');
const spock4 = document.querySelector('.spock4');

let hasFlippedCard = false;
let boardLock = false;
let firstCard, secondCard;
let score = 0;
let click = 0;

function flipCard(){

  clickCounter();
  //console.log(this);              // this is referred to the div which has a click event attached
  if(boardLock) return;            //if boardLock is true return and don't execute the function 
  this.classList.add('flip');     
  if(!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard = this;
    
  }else{
    //second click
    hasFlippedCard = false;
    secondCard = this;
    //do cards match 
    checkForMatch();
  }
}

const scoreCounter = () =>{
  score1 = score += 2;
  points.innerHTML = score1
}

const clickCounter = () =>{
  click1 = click += 1;
  clicks.innerHTML = click1

  // conditions for spock variants 
  if((click1 > 16 && click1 <= 26) && parseInt(points.innerHTML) === 14){  //&& points.innerHTML === 16
    setTimeout(() => {
      spock1.style.display = 'block';
    },1500)
  }else if((click1 > 26 && click1 <= 34) && parseInt(points.innerHTML) === 14){
    setTimeout(() => {
      spock2.style.display = 'block';
    },1500)
  }else if((click1 > 34 && click1 <= 46) && parseInt(points.innerHTML) === 14){
    setTimeout(() => {
      spock3.style.display = 'block';
    },1500)
  }else if((click1 > 46) && parseInt(points.innerHTML) === 14){
    setTimeout(() => {
      spock4.style.display = 'block';
    },1500)
  }
};

//spock display:"none" & reload page
spock1.addEventListener('click', e => {
  e.preventDefault()
  spock1.style.display = 'none';
  refreshPage();
});

spock2.addEventListener('click', e => {
  e.preventDefault()
  spock2.style.display = 'none';
  refreshPage();
});

spock3.addEventListener('click', e => {
  e.preventDefault()
  spock3.style.display = 'none';
  refreshPage();
});

spock4.addEventListener('click', e => {
  e.preventDefault()
  spock4.style.display = 'none';
  refreshPage();
});


const checkForMatch = () =>{
  if(firstCard.dataset.framework === secondCard.dataset.framework){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    scoreCounter();                               

  }else { //not a match
    boardLock = true;                     //locking the board to prevent the third card from being open in case of no match
    setTimeout(() => {
      firstCard.classList.remove('flip'); //removing the flip class vith timeout to unflip the no match pair of cards
      secondCard.classList.remove('flip');
      boardLock = false;                  //unlocking the board to continue game
    },1500)
  }
}
//Shuflle cards
const changeOrder = () => {
  cards.forEach(card => {
    let random = Math.floor(Math.random() * 16) //.random(takes a number from 0 to 1) multiply with the number of cards 
    card.style.order = random;                  //flexbox order prop needs an integer(ceo broj) to work so we apply.floor method 
  })                                            
}
changeOrder();

const refreshPage = () => {
  window.location.reload();
} 

cards.forEach(card => card.addEventListener('click', flipCard));


  



