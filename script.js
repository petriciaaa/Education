const button = document.querySelector('#page__6__button');
const email__wrapper = document.querySelector('page__6__email__wrapper__2');

button.classList.remove('page__6__button__on');

button.addEventListener("click" , function(){
    button.classList.add('page__6__button__on');
    button.textContent = ('Confirmed');

    email__wrapper.classList.remove('page__6__email__wrapper__2');

})



const button2 = document.querySelector('#page__6__button2');

button.classList.remove('page__6__button__on');

button.addEventListener("click" , function(){
    button2.classList.add('page__6__button__on');
    button2.textContent = ('Confirmed');

})
