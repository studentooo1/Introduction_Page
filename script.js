
const restofbody = document.querySelector('.even-columns');
const nav = document.querySelector('nav')
const dropDown = document.querySelectorAll('.dropdown');
const options = document.querySelectorAll('.options');
const mobile = document.querySelectorAll('.hidden_small');
const menu = document.querySelector('.menu_bar');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close-button');


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
    close.classList.toggle('close-hide')
    menu.classList.toggle('fixed');
    mobile.forEach((tab) => {
        tab.classList.remove('hidden_small');
    })
    restofbody.classList.toggle('even-columns-extra')
})

close.addEventListener('click', () => {
    menu.replaceChild(hamburger, close);
    close.classList.toggle('close-hide')
    menu.classList.toggle('fixed');
    mobile.forEach((tab) => {
        tab.classList.add('hidden_small');
    })
    restofbody.classList.toggle('even-columns-extra')
})

