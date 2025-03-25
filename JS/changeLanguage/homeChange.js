var textPT = document.querySelector('.textContainerPT');
var textEN = document.querySelector('.textContainer');
var btnTranslate = document.querySelector('#btnTranslate');

btnTranslate.addEventListener('click', function(){
    textPT.classList.toggle('active')
    textEN.classList.toggle('active')
})