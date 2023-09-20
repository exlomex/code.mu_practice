"use strict"

let p = document.querySelectorAll('#parent p')
let spans = document.querySelectorAll('#parent span')

for (const elem of p) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';
	elem.appendChild(remove);

	remove.addEventListener('click', function(event) {
		elem.remove();
		event.preventDefault();
	});
}

for (const span of  spans) {
	span.addEventListener('click', function func() {
		let input = document.createElement('input')
		input.textContent = this.value
		span.textContent = ''
		span.appendChild(input)
	
		input.addEventListener('blur', e => {
			span.textContent = e.target.value;
			span.addEventListener('click', func)
		})
	
		span.removeEventListener('click', func)
	})
}







