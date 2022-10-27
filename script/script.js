//hash
try {
    function backBtnDisplayCondition(){
        let backBtn = document.getElementById('backBtn');
        if(backBtn) {
            let currentHash = window.location.hash;
            if(currentHash == '#package0') {
                backBtn.style.display = 'none';
            } else {
                backBtn.style.display = ''
            }
        }
    }
    if(window.location.hash === '' || window.location.hash === '#!') {
        window.location.hash = '#package0'
    }
    backBtnDisplayCondition();
    window.addEventListener('hashchange', () => {
        backBtnDisplayCondition();
        let hash = window.location.hash;
        switch (hash) {
            case '':
            case '#!':
                window.location.hash = '#package0';
                break;
        }
    })
} catch (e) {
    console.log('hash error ', e);
}

//Car engine sound onclick
try {
    let carEngineStartBtn = document.getElementById('soundStart'),
        carEngineStart = document.getElementById('soundSrc');

    carEngineStartBtn.addEventListener('click', function () {

        if (carEngineStart.paused) {
            carEngineStart.play();
        } else {
            carEngineStart.currentTime = 0
        }
    })
} catch (e) {
    console.log('Car engine sound error ', e);
}
//end of engine sound

//header hamburger menu
try {
    let hamburgerButton = document.querySelector('.hb-app-header__hamburger'),
        hamburgerMenu = document.querySelector('.hb-app-header__menu'),
        headerMenu = document.querySelector('.hb-app-header'),
        headerActiveClass = 'active';

    hamburgerButton.addEventListener('click', e => {
        e.stopPropagation();
        headerMenu.classList.toggle(headerActiveClass);
    })
    document.body.addEventListener('click', e => {
        let current = e.target;
        if (!current.classList.contains('hb-app-header__menu') || !current.closest('.hb-app-header__menu')) {
            headerMenu.classList.remove(headerActiveClass);
        }
    })
} catch (e) {
    console.log('Header Hamburger menu error ', e);
}

//expand - collapse
try {
    let expandHead = document.querySelectorAll('.expand-head'),
        expandContent = document.querySelectorAll('.expand-content'),
        activeClass = 'active';

    for (let i = 0; i < expandHead.length; i++) {
        expandHead[i].addEventListener('click', function (){
            expandHead[i].classList.toggle(activeClass);
            expandContent[i].classList.toggle(activeClass);
        })
    }

} catch (e) {
    console.log('expand-collapse error ', e);
}