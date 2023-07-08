const nav = document.querySelector('nav')
const dropDown = document.querySelectorAll('.dropdown');
const options = document.querySelectorAll('.options');
const mobile = document.querySelectorAll('.hidden_small');
const menu = document.querySelector('.menu_bar');
console.log(menu)
const hamburger = document.querySelector('.hamburger');
const close = document.createElement('img');
close.setAttribute('src', '../images/icon-close-menu.svg');
close.classList = 'menu-hide'
close.style.height = '1.3rem';

dropDown.forEach((button) => {
    button.addEventListener('click', () => {
        if (button === dropDown[0]) {
            options[0].classList.toggle('hidden')
        }else {
            options[1].classList.toggle('hidden')
        }
    })
})

hamburger.addEventListener('click', () => {
    menu.replaceChild(close, hamburger);
    mobile.forEach((tab) => {
        tab.classList.remove('hidden_small');
    })
})

close.addEventListener('click', () => {
    menu.replaceChild(hamburger, close);
    mobile.forEach((tab) => {
        tab.classList.add('hidden_small');
    })
})

