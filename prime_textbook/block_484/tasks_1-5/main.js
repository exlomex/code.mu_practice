let arr = ['item1', 'item2', 'item3', 'item4', 'item5']

let ul = document.createElement('ul')
document.body.appendChild(ul)

function addInput() {
    let input = document.createElement('input')
    input.value = this.textContent

    this.textContent = ''
    this.appendChild(input)

    input.addEventListener('blur', () => {
        this.textContent = input.value

        this.addEventListener('click', addInput)
    })
    this.removeEventListener('click', addInput)
}

function removeButton(li) {
    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'remove'

    a.addEventListener('click', (e) => {
        e.preventDefault()
        li.remove()
    })

    li.appendChild(a)
}


for (let elem of arr) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.textContent = elem

    li.appendChild(span)
    span.addEventListener('click', addInput)

    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'перечеркнуть'

    a.addEventListener('click', (e) => {
        e.preventDefault()
        span.classList.toggle('line-through')
    })

    li.appendChild(a)

    removeButton(li)

    ul.appendChild(li)
}

// new input
let input = document.createElement('input')
document.body.appendChild(input)
input.addEventListener('blur', () => {

    let li = document.createElement('li')
    let span = document.createElement('span')

    span.textContent = input.value
    input.value = ''

    li.appendChild(span)
    span.addEventListener('click', addInput)

    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'перечеркнуть'

    a.addEventListener('click', (e) => {
        e.preventDefault()
        span.classList.toggle('line-through')
    })

    li.appendChild(a)

    removeButton(li)

    ul.appendChild(li)
})



