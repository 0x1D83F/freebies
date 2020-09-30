const burgerSwitcher = () => {
    document.querySelector('.header__burger-close').onclick = function(){
        document.querySelector('.line_1').classList.toggle('line_rotate');
        document.querySelector('.line_2').classList.toggle('line_rotate-middle' );
        document.querySelector('.line_3').classList.toggle('line_hide' );
        document.querySelector('.burger-menu').classList.toggle('to-bottom');
    }
};


burgerSwitcher();