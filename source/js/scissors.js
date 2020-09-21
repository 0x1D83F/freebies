window.addEventListener('resize', function () {
    let userWindow = window.innerWidth || document.documentElement.clientWidth;

    if (userWindow <= 1100) {
        const best = document.querySelectorAll('.resize-mod p');

        (function() {
            best.forEach(item => {
                item.innerHTML = item.innerHTML.slice(0, 30) + ' ...';
            })
        })();
    }
})



