"use strict"

let all_p = document.querySelectorAll("p")

for (const p of all_p) {
	let span = document.createElement('span')
	span.textContent = p.textContent
	p.textContent = ''
	p.appendChild(span)

	let a = document.createElement('a')
	a.href = '#'
	a.textContent = "перечеркнуть"

	p.appendChild(a)

	a.addEventListener('click', function(e) {
		span.classList.toggle('text_decor')
		this.remove()
	})

}








