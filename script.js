'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//To prevent repeating the code we write it once and then we can use it as much as it's needed
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  // attention: we do not call the function here. if we do, it would immediately call the function as soon as JS execute this line. We want it to happen only when we 'click' on 'closeModal button'
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Global events do not happenning in one specific elements.For handling global events like keyboard events we usually listen on the whole document.
//about the name of the event itself ,there are actually 3 types of events for the keyboard. "keydown"(as soon as we just press down the key) , "keypress"(as we keep our finger on a certain key) and "keyup"(when we lift our finger off the keyboard/key)

//attention : the information about which key pressed will be stored in the event that is going to occure as soon as any key is pressed.

//anytime that an event like this occurs JavaScript does in fact generate an "object" and that "object" contain all the information about the event itself and we can actually access that object in the event handler function.

//what we need is to give the function below a parameter and I called it "e" (it dosen't matter really what we call it)

//as the event occurs, Javascript will call the function with the event object as an "argument".

//attention: this works because we do not call this function here ourselves and we only define it here. kinda like : 'Hey Javascript! call the function when a key down event happens! and when you do so please pass in the event object as an argument! '

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //here we need to call the function because we want the close modal execute after we press the "ESC Key"
    closeModal();
  }
});
