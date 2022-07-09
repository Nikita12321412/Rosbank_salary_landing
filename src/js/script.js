const popUp = document.getElementById('pop-up');
const popUpShow = document.querySelector('body');
const popUpClose = document.getElementById('pop-up-close');
const popUpContainer = document.getElementById('pop-up-container')

let date = new Date ('10 July 2022 23:56:00')

popUpShow.addEventListener('mouseleave', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});


popUpClose.addEventListener('click', () => {
    popUp.classList.remove('active');
});

popUp.addEventListener('click', (event) => {
    if(event.target === popUpContainer) {
        popUp.classList.remove('active');
    }
})


function popUpTimer () {
    let currentDate = new Date ();
    let timeLeft = date - currentDate;
    let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    let seconds = Math.floor(timeLeft / 1000) % 60;

    if (timeLeft < 0) {
        document.getElementById('timer-header').innerText = 'Оставьте заявку';
        document.getElementById('pop-up__values').innerText = '';
    } else {
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    }
}

setInterval (popUpTimer, 1000)

popUpTimer ();