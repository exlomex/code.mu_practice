const slider = document.querySelector('#slider')

const imgs = document.querySelectorAll('img')

imgs[0].style.display = 'inline'

let index = 0
setInterval(() => {
    let img = imgs[index]
    img.style.display = 'none'

    index = (index + 1) % imgs.length
    let nextImg = imgs[index]
    nextImg.style.display = 'inline'
}, 2000);


