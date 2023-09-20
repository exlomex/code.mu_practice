"use strict"

let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent; 

input.addEventListener('input', function() {
	elem.textContent = this.value;
});