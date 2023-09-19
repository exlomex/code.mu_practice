"use strict"

let parent = document.querySelector('#elem');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem;

    li.addEventListener('click', function click(e) {
        e.target.textContent += '!';

        li.removeEventListener('click', click)
    })

    parent.appendChild(li);
}