var menuItem = document.querySelectorAll('.item-menu')
var overlay = document.querySelector('.overlay')

function selectOption(){
    menuItem.forEach((item) => 
        item.classList.remove('active')
    )
    this.classList.add('active')
    closeMenu()
}

function closeMenu(){
    menuClmn.classList.remove('expand')
    overlay.classList.remove('active')
}

menuItem.forEach ((item) =>
    item.addEventListener('click', selectOption)
)