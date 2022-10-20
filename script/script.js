let appCartArray = [];

//engine sound hero
let carEngineStartBtn = document.getElementById('carEngineStartBtn'),
    carEngineStart = document.getElementById('carEngineStart');

carEngineStartBtn.addEventListener('click', function (){

    if (carEngineStart.paused) {
        carEngineStart.play();
    }else{
        carEngineStart.currentTime = 0
    }
})

//end of engine sound hero


//modal
let modalBackDrop = document.querySelectorAll('.modal-backdrop'),
    modalClose = document.querySelectorAll('.close-modal'),
    modalContent = document.querySelectorAll('.modal-content'),
    dataModal = document.querySelectorAll('[data-modal-id]');

dataModal.forEach(item => {
    item.addEventListener('click', e => {
        let dataId = item.getAttribute('data-modal-id');
        let modalBackdrop = document.querySelector(`#${dataId}`);
        if (modalBackdrop) {
            modalBackdrop.classList.add('active');
            document.body.classList.add('_lock');
        }
    })
})

modalContent.forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation();
    })
})
modalClose.forEach(item => {
    item.addEventListener('click', e => {
        let current = e.target;
        current.closest('.modal-backdrop').classList.remove('active');
        document.body.classList.remove('_lock');
    })
})
modalBackDrop.forEach(item => {
    item.addEventListener('click', e => {
        item.classList.remove('active');
        document.body.classList.remove('_lock');
    })
})

//end of modal