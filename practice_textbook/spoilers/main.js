"use strict"

const buttons = document.querySelectorAll('.toggle')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        
        let spoiler = button.parentElement.nextElementSibling
        if (spoiler) {
            spoiler.classList.toggle('active')
        }
    })
})
