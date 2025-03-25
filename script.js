var menuItem = document.querySelectorAll('.item-menu')

function selectOption(){
    menuItem.forEach((item) => 
        item.classList.remove('active')
    )
    this.classList.add('active')
    menuClmn.classList.remove('expand'); //Fecha o menu ao clicar num item
}

menuItem.forEach ((item) =>
    item.addEventListener('click',selectOption)
)

var btnExpand = document.querySelector('#btn-expand')
var menuClmn = document.querySelector('.menu')
var overlay = document.querySelector('.overlay');

btnExpand.addEventListener('click', function(){
    menuClmn.classList.toggle('expand')
    overlay.classList.toggle('active')
})