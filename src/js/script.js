const popUp = document.getElementById('pop-up')
const popUpShow = document.querySelector('body');
const popUpClose = document.getElementById('pop-up-close')
const outsideBannerClose = document.getElementById('pop-up-container')

popUpShow.addEventListener('mouseleave', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});


popUpClose.addEventListener('click', () => {
    popUp.classList.remove('active');
});

outsideBannerClose.addEventListener('click', (event) => {
    popUp.classList.remove('active');
})