"use strict"

let elem = document.querySelector('#elem');
let hide = document.querySelector('#hide');

hide.addEventListener('click', function() {
	elem.classList.toggle('hidden');
});




