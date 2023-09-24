// "use strict"

const cities = ["New York", "Los Angeles", "Chicago", "Houston",
    "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas",
    "San Jose", "Austin", "Jacksonville", "Indianapolis", "San Francisco",
    "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "El Paso",
    "Washington", "Boston", "Detroit", "Nashville", "Memphis", "Portland",
    "Oklahoma City", "Las Vegas", "Louisville", "Baltimore"
];

const ul = document.querySelector('#list')
const input = document.querySelector('#elem')

input.addEventListener('input', dropList)

function dropList() {
    removeLis()

    let filteredCities;
    if (this.value) {
        filteredCities = cities.filter(elem => {
            if (elem.startsWith(this.value)) {
                return true
            }
            return false
        })
    }

    if (filteredCities) {
        for (const city of filteredCities) {
            let li = document.createElement('li')
            li.classList.add('list__item')
            li.textContent = city;

            li.addEventListener('click', e => {
                removeLis()
                input.value = city;
            })

            ul.appendChild(li)
        }
    }
}

function removeLis() {
    let li = document.querySelectorAll('.list__item')
    li.forEach(item => {
        item.remove()
    });
}