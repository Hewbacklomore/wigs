'use strict';

const humburger = document.querySelector('.humburger');
const sideNav = document.querySelector('.sidenav');
const imagesBlock = document.querySelector('.images');
const imagesBox = document.querySelector('.images__box');
const preSale = document.querySelector('.images__wrapper_presale');
const sideClose = document.querySelector('.sidenav__close');


humburger.addEventListener('click', () => {
    
    document.createElement('div');
    preSale.classList.add('active__class');
    preSale.classList.remove('images__wrapper_presale')
    sideNav.style.transform = 'translateX(0%)';
    sideNav.style.transition = '0.5s';
   
});
sideClose.addEventListener('click', ()=> {
    imagesBlock.classList.remove('active__class');
    preSale.classList.add('images__wrapper_presale')
    sideNav.style.transform = 'translateX(-100%)';
    imagesBox.style.display = 'block';

})



