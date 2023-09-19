"use strict"

let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	let p = document.createElement('p');
	p.textContent = elem;
	
    p.addEventListener('click', function(e) {
        this.textContent += 1
    })

	parent.appendChild(p);
}