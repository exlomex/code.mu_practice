"use strict"

let tds = document.querySelectorAll('#table td');
let button = document.querySelector('.button')

button.addEventListener('click', e => {
    for (let td of tds) {
        td.textContent = Number(td.textContent) + 1
    }
})
