const playBtn = document.querySelector('.btn--welcome');
const continueBtn = document.querySelector('.btn--continue');
const input = document.querySelector('.name__input');


playBtn.addEventListener('click', instructionPage);
continueBtn.addEventListener('click', playPage);

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