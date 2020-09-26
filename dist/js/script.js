'use strict';
const best = document.querySelector('.best-item-subs p').innerHTML;
const lorem = document.querySelector('.rmb-num-discription  p').innerHTML;
const portrait = document.querySelector('.prt-rmb-main__sub p').innerHTML;
const items = document.querySelectorAll('.resize-mod p');

const bestTrim = best.slice(0, 30) + ' ...';
const loremTrim = lorem.slice(0, 30) + ' ...';
const portText = portrait.slice(0, 30) + ' ...';



function trimmer(){
    let userWindow = window.innerWidth || document.documentElement.clientWidth;
    if(userWindow <= 1100){
        items.forEach((item,index) => (index === 0 ? item.innerHTML = bestTrim : item.innerHTML = loremTrim) )
    } else {
        items.forEach((item,index) => (index === 0 ? item.innerHTML = best : item.innerHTML = lorem) )
    }
}


window.addEventListener('resize', trimmer)
window.addEventListener('load', trimmer)



;
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
});



  
