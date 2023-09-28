let texts = ['text1', 'text2', 'text3'];

const slider = document.querySelector('#slider')

let index = 0
setInterval(() => {
    clearSlider()

    let p = document.createElement('p')
    p.textContent = texts[index]

    slider.appendChild(p)
    index = (index + 1) % texts.length;
}, 1000)

function clearSlider() {
    const allP = document.querySelectorAll('p')
    allP.forEach(p => {
        p.remove()
    })
    }