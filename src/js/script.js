const popUp = document.getElementById('pop-up');
const popUpShow = document.querySelector('body');
const popUpClose = document.getElementById('pop-up-close');
const popUpContainer = document.getElementById('pop-up-container')

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