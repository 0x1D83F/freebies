const creativeRhombus = document.querySelector('.header__rhombus-blue');
const creativeRhombusMini = document.querySelector('.header__rhombus-black');
const headerTitle = document.querySelector('.header__title');
const bestBlock = document.querySelector('.rmb-best');
const bigBlock = document.querySelector('.rmb-bg');
const miniBlock = document.querySelector('.rmb-mini');




window.addEventListener('load', function(){
    creativeRhombus.classList.add('_blue-onload');
    creativeRhombusMini.classList.add('_black-transition', '_black-onload');
    headerTitle.classList.add('_title-onload');
    bestBlock.classList.add('_rmb-load');
    bigBlock.classList.add('_rmb-bg-onload');
    miniBlock.classList.add('_rmb-mini-onload');
})