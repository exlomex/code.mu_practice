"use strict"

const menu = document.querySelectorAll('.menu a')
const tabs = document.querySelectorAll('.tabs .tab')

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', e => {

        for (let j = 0; j < menu.length; j++) {
            if (menu[j].classList.contains('active')) {
                menu[j].classList.remove('active')
                tabs[j].classList.remove('active')
            }
            
        }

        tabs[i].classList.add('active')
        menu[i].classList.add('active')

        e.preventDefault()
    })
    
}