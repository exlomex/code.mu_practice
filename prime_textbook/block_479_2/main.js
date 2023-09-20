"use strict"

let all_rows = document.querySelectorAll('.table tr')

for (let row of all_rows) {
    let td = document.createElement('td')

    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'change-color'

	td.appendChild(a)

    a.addEventListener('click', e => {
        
        let all_tds = row.querySelectorAll('td')
		
        all_tds.forEach(tdElem => {
			tdElem.classList.toggle('change_color')
		})
		e.preventDefault()
    })

    row.appendChild(td)
}





