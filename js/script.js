const buttonBurger = document.querySelector('.header__burger');
const navigationPanel = document.querySelector('.navigation');
const substrate = document.querySelector('.substrate');
const body = document.querySelector('body');

let isOpen = false;


history.replaceState({isOpen: 'false' }, '');

buttonBurger.addEventListener('click', e => {
   if( !isOpen ) {
      history.pushState({isOpen: 'true' }, '');
      openBar();
   } else {
      history.pushState({isOpen: 'false' }, '');
      closeBar();
   }
})

window.addEventListener('popstate', e => {
   if( e.state.isOpen ) {
      closeBar();
   } else {
      openBar();
   }
})


function openBar() {
   isOpen = true;
   buttonBurger.classList.toggle('active');
   body.classList.toggle('lock');
   substrate.style.opacity = 0.5;
   navigationPanel.style.transform = 'translate(0)';
}
function closeBar() {
   isOpen = false;
   buttonBurger.classList.toggle('active');
   body.classList.toggle('lock');
   substrate.style.opacity = 0;
   navigationPanel.style.transform = 'translateX(100vw)';
}

