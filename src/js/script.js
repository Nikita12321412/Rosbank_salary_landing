const popUp = document.getElementById('pop-up')
const popUpShow = document.getElementById('pop-up-show');
const popUpClose = document.getElementById('pop-up-close')

popUpShow.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})


popUpClose.addEventListener('click', () => {
    popUp.classList.remove('active');
})
