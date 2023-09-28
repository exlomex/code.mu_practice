let texts = ['text1', 'text2', 'text3'];

const slider = document.querySelector('#slider')

let index = 0

const left = document.querySelector('#left')
const right = document.querySelector('#right')

left.addEventListener('click', function(e) {
    clearSlider()
    e.preventDefault()
    const p = document.createElement('p')
    p.textContent = texts[index]
    slider.appendChild(p)

    if (index > 0) {
        index--
    }

});
right.addEventListener('click', function(e) {
    clearSlider()
    e.preventDefault()
    const p = document.createElement('p')
    p.textContent = texts[index]
    slider.appendChild(p)

    if (index < texts.length - 1) {
        index++
    }
    
});

function clearSlider() {
    const allP = document.querySelectorAll('#slider p')
    allP.forEach(p => {
        p.remove()
    })
}