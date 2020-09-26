const creativeRhombus = document.querySelector('.header__rhombus-blue');
const creativeRhombusMini = document.querySelector('.header__rhombus-black');
const headerTitle = document.querySelector('.header__title');




window.addEventListener('load', function(){
    creativeRhombus.classList.add('_blue-onload');
    creativeRhombusMini.classList.add('_black-transition', '_black-onload');
    headerTitle.classList.add('_title-onload');
})