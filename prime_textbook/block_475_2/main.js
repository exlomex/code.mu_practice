"use strict"

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	input.addEventListener('input', e => {
		elem.textContent = e.target.value;
	});

	input.addEventListener('blur', function() {
		this.remove()
	});

	elem.parentElement.appendChild(input);
});
