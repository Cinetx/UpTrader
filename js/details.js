
var titleBlock = document.querySelector('.content__title');
var detailsContent = document.querySelector('.content__wrapper');
var bodyBackground = document.querySelector('.background__wrapper');
var mainBackground = document.querySelector('.main-bar');

titleBlock.addEventListener('click', function(evt){
    titleBlock.classList.toggle('content__title--arrow-up');
    detailsContent.classList.toggle('content__close');
    bodyBackground.classList.toggle('background__wrapper--on')
    mainBackground.classList.toggle('main-bar__background')
        });
        