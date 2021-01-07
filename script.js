const diceElements=document.querySelector('.dice');
diceElements.classList.add('.hidden');
const rollDice=document.querySelector('.btn--roll');
const holdDice=document.querySelector('.btn--hold');
const reset=document.querySelector('.btn--new');
 let currentScore=0;
 let activePlayer=0;
 let totalScore=[0,0];
 let playing=true;

rollDice.addEventListener('click',show);
holdDice.addEventListener('click',hold);
reset.addEventListener('click',newgame);

function show(){
  if(playing){
    let number=Math.trunc(Math.random()*6)+1;
    diceElements.src=`dice-${number}.png`;
    diceElements.classList.remove('hidden');

    if(number!=1){
      currentScore=currentScore+number;
      document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
      }
    else{
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
          activePlayer=activePlayer==0 ? 1 : 0
          currentScore=0;
          document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
      }
      
}}


function hold(){
   if(playing){
    totalScore[activePlayer]=totalScore[activePlayer]+currentScore;
    currentScore=0;

    document.querySelector(`#score--${activePlayer}`).textContent=totalScore[activePlayer];
    document.querySelector(`#current--${activePlayer}`).textContent=0;

    if(totalScore[activePlayer]>=50){
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       diceElements.classList.add('hidden');

    }
    else{
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
          activePlayer= (activePlayer==0) ? 1 : 0;
          currentScore=0;
          document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    }
}}

function newgame(){
 let currentScore=0;
 currentScore.textContent=0;
 totalScore.textContent=0;
 let activePlayer=0;
 document.querySelector('.player--active').classList.remove('winner');
 document.querySelector('.player--1').classList.remove('winner');
 document.querySelector('.score').textContent=0;
 
}









