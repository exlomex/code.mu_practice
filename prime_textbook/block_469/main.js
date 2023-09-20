"use strict"

let table = document.getElementById('table');

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of employees) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);

	td2.addEventListener('click', e => {
		e.target.textContent = Number(e.target.textContent) + 1
	})
	
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);

	td3.addEventListener('click', e => {
		e.target.textContent = (Number(e.target.textContent) * 0.1) + Number(e.target.textContent)
	})
	
	table.appendChild(tr);
}