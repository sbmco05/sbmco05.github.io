var btnExpand = document.querySelector('#btn-expand')
var menuClmn = document.querySelector('.menu')
var overlay = document.querySelector('.overlay')

btnExpand.addEventListener('click', function(){
    menuClmn.classList.toggle('expand')
    overlay.classList.toggle('active')
})