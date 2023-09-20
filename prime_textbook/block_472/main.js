"use strict"

let parent = document.querySelector('#parent');
let button = document.querySelector('#button')

button.addEventListener('click', e => {
    let li = document.createElement('li');
    li.textContent = 'new_li';

    li.addEventListener('click', function () {
        this.remove();
    });

    parent.appendChild(li);
})

let li = document.querySelectorAll('#parent li')
li.forEach(element => {
    element.addEventListener('click', function () {
        this.remove();
    });
});
