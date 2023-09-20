"use strict"

let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', e => {
	elem.remove();
    e.preventDefault()
});