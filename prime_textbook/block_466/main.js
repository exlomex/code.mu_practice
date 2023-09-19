"use strict"

let row =  document.querySelector('.input-row')
let col = document.querySelector('.input-col')
let button =  document.querySelector('.button')

let table = document.querySelector('#table');

button.addEventListener('click', e => {
    for (let i = 0; i < +row.value; i++) {
        let tr = document.createElement('tr');
        
        for (let i = 0; i < +col.value; i++) {
            let td = document.createElement('td');
            td.textContent += 'x';
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
})



