const playBtn = document.querySelector('.btn--welcome');
const continueBtn = document.querySelector('.btn--continue');
const input = document.querySelector('.name__input');
const cardBox = document.querySelector('.dashboard__game');
const userChoice = document.querySelector('.user__choice');
const houseChoice = document.querySelector('.house__choice');
const choices = document.querySelectorAll('.dashboard__box');

playBtn.addEventListener('click', instructionPage);
continueBtn.addEventListener('click', playPage);
cardBox.addEventListener('click', chooseCard);

 function instructionPage(e){
    document.querySelector('.welcome__section').classList.add('hide');
    document.querySelector('.instruction__section').classList.remove('hide');
    console.log('working');
 }

 function playPage(e){
    if(input.value !== ""){
      document.querySelector('.dashboard').classList.remove('hide');
      document.querySelector('.instruction__section').classList.add('hide');
      console.log(input);
      document.querySelector('.user').textContent = input.value;
    }
  else{
     alert('please tell us your name!')
  }
 }

function chooseCard(e){
   if(e.target.classList.contains('dashboard__box')){
      
      document.querySelector('.dashboard').classList.add('hide')
      document.querySelector('.playing').classList.remove('hide');

      let classNames = e.target.classList;
      userChoice.className = classNames;
      console.log(userChoice.firstElementChild);
      userChoice.firstElementChild.src = e.target.firstElementChild.src;
      userChoice.style.top = "10rem";
      userChoice.style.left = "20%";
      //Loop through choices
      function myFunction() {
         setTimeout(houseChooing, 2000);
       }

     function houseChooing(){ 
        let ran = Math.floor((Math.random() * 2) + 1);

      for(let p = 0; p < choices.length; p++ ){
         let ranChoice = choices[ran];
         houseChoice.className = ranChoice.classList;
         houseChoice.firstElementChild.src = ranChoice.firstElementChild.src;
         houseChoice.style.top = "10rem";
         houseChoice.style.left = "20%";

       }
      }

      myFunction();


   } else if(e.target.classList.contains('dashboard__icon')){
      
      document.querySelector('.dashboard').classList.add('hide')
      document.querySelector('.playing').classList.remove('hide');

      let classNames = e.target.parentElement.classList;
      userChoice.className = classNames;
      
      userChoice.firstElementChild.src = e.target.src;
      userChoice.style.top = "10rem";
      userChoice.style.left = "20%";


   }
}
