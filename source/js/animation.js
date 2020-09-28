
window.addEventListener('load', function () {
    const creativeRhombus = document.querySelector('.header__rhombus-blue');
    const creativeRhombusMini = document.querySelector('.header__rhombus-black');
    const headerTitle = document.querySelector('.header__title');
    const bestBlock = document.querySelector('.rmb-best');
    const bigBlock = document.querySelector('.rmb-bg');
    const miniBlock = document.querySelector('.rmb-mini');
    
    creativeRhombus.classList.add('_blue-onload');
    creativeRhombusMini.classList.add('_black-transition', '_black-onload');
    headerTitle.classList.add('_title-onload');
    bestBlock.classList.add('_rmb-load');
    bigBlock.classList.add('_rmb-bg-onload');
    miniBlock.classList.add('_rmb-mini-onload');
})




const textAnimator = () => {
    //For h2 headers and descriptons
    const elem = document.querySelectorAll('._animated');
    const userWindow = window.innerHeight || document.documentElement.clientHeight;

    elem.forEach(item => {
        const elemPosition = item.getBoundingClientRect().top * 1.1;
        if (elemPosition <= userWindow) {
            item.style.cssText = `
            transform: translateY(0%);
            `
        }
    })

    // For second block
    const rmbSecond = document.querySelector('.prt-rmb-second');
    const rmbElem = rmbSecond.getBoundingClientRect().top * 3;

    if (rmbElem <= userWindow) {
        let elementScaleModificator = document.querySelectorAll('._prt-transorm');

        elementScaleModificator.forEach((item, index) => {

            if (item.classList.contains('mod-un-rotate')) {
                return item.style.cssText = `transform: rotate(45deg) scale(1);`
            }

            setTimeout(() => {
                item.classList.add('_prt-toScale')
            }, index * 300)
        })

    }

    //For social block
    const socialBlock = document.querySelector('.social');
    const socialElems = document.querySelectorAll('._social-anim');
    const socialBlockDistance = socialBlock.getBoundingClientRect().top * 2;
    if (socialBlockDistance <= userWindow){
        socialElems.forEach((item,index) => {
            setTimeout(() => {
                item.classList.add('_social-toLeft');
            }, index * 300)
        })
    }

    //Touch block 
    const touchBlock = document.querySelectorAll('.touch-block');
    const touchElem = document.querySelector('.touch-items');
    const distanceToTouch = touchElem.getBoundingClientRect().top * 1.2;

    if(distanceToTouch <= userWindow){
        touchBlock.forEach((item,index) => {
            setTimeout(() => {
                item.classList.add('_touch-toRight');
            }, index * 450)
        })
    };

}

window.addEventListener('scroll', textAnimator)




