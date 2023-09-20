"use strict"

let table = document.querySelector('#table');

let k = 2; // начальное значение счетчика
for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		td.textContent = k; 
		k += 2; 
		tr.appendChild(td);
	}
	table.appendChild(tr);
}