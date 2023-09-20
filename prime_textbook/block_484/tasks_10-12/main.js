let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let uls = document.querySelector('.uls')

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

        ul = document.createElement('ul')
        for (const item in new_employe) {

            let li = document.createElement('li')
            let span = document.createElement('span')
            span.textContent = new_employe[item]

            li.appendChild(span)
            ul.appendChild(li)
            uls.appendChild(ul)

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
                li.remove();
                event.preventDefault();
            });

            li.appendChild(remove);
        }
    }

})

for (const employe of employees) {
    ul = document.createElement('ul')
    for (const item in employe) {

        let li = document.createElement('li')
        let span = document.createElement('span')
        span.textContent = employe[item]

        li.appendChild(span)
        ul.appendChild(li)
        uls.appendChild(ul)

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
            li.remove();
            event.preventDefault();
        });

        li.appendChild(remove);
    }
}

