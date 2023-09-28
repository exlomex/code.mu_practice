let texts = ['1.png', '2.png', '3.png'];

const slider = document.querySelector('#slider')

let index = 0

const left = document.querySelector('#left')
const right = document.querySelector('#right')

setInterval(() => {
    updateImg()

    index = (index + 1) % texts.length;
}, 10000)


left.addEventListener('click', function(e) {
    e.preventDefault()
    updateImg()

    if (index > 0) {
        index--
    }

});

right.addEventListener('click', function(e) {
    e.preventDefault()
    updateImg()

    if (index < texts.length - 1) {
        index++
    }
    
});

function updateImg() {
    slider.src = `img/${texts[index]}`
}
