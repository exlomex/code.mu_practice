"use strict"

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input')
	input.textContent = this.value
	elem.textContent = ''
	elem.appendChild(input)

	input.addEventListener('blur', e => {
		elem.textContent = e.target.value;
		elem.addEventListener('click', func)
	})

	elem.removeEventListener('click', func)
})