let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let table = document.querySelector('.table')

function add_new_td(new_employe, table, tr) {
    for (const item in new_employe) {
        let td = document.createElement('td')
        let span = document.createElement('span')
        span.textContent = new_employe[item]

        td.appendChild(span)
        tr.appendChild(td)
        table.appendChild(tr)

        span.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = span.textContent;

            span.textContent = '';
            span.appendChild(input);

            input.addEventListener('blur', function () {
                span.textContent = this.value;
                span.addEventListener('click', func);
            });

            span.removeEventListener('click', func);
        });

        // remove button
        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent = 'remove';

        remove.addEventListener('click', function (event) {
            td.remove();
            event.preventDefault();
        });

        td.appendChild(remove);
    }
}

// new employe
let form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    let name = form.name.value
    let age = form.age.value
    let salary = form.salary.value

    if (name.length > 0 && age.length > 0 && salary.length > 0) {
        let new_employe = {}

        new_employe.name = name;
        new_employe.age = age;
        new_employe.salary = salary;

        employees.push(new_employe)

        tr = document.createElement('tr')
        add_new_td(new_employe, table, tr)
    }

})

for (const employe of employees) {
    tr = document.createElement('tr')
    add_new_td(employe, table, tr)
}

