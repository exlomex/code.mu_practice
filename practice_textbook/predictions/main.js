"use strict"

const predictions = [
    "Сегодня будет удачный день, полный позитивных событий.",
    "Ожидайте приятное сюрприз от близкого человека.",
    "Будьте осторожны на дороге, возможны проблемы с транспортом.",
    "Вы сможете успешно завершить важный проект.",
    "Здоровье будет стабильным, но не забывайте о физической активности.",
    "Сегодняшний день подходит для решения давних конфликтов.",
    "Материальные затраты могут быть высокими, будьте экономны.",
    "Сделайте паузу и уделите время отдыху, чтобы избежать стресса.",
    "Постарайтесь избегать споров с коллегами на работе.",
    "Новые возможности появятся в сфере личных отношений.",
    "Не рекомендуется брать на себя слишком много обязанностей.",
    "Возможны неприятные новости из далеких мест.",
    "Сегодняшний день подходит для начала нового хобби или увлечения.",
    "Старайтесь не переутомляться, уделите внимание собственному здоровью.",
    "День может начаться с неожиданных трудностей, но они будут преодолимы.",
    "Будьте осторожны с финансовыми инвестициями."
];

const text = document.querySelector('#text')
const button_start = document.querySelector('#start')
const button_stop = document.querySelector('#stop')
const timer_text = document.querySelector('#timer')

let timerId

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTimer() {
    timerId = setInterval(function() {
        let randomInt = getRandomInt(1, 16)

        timer_text.textContent = randomInt
    }, 100)

}

button_start.addEventListener('click', e => {
    button_start.classList.remove('active')
    button_stop.classList.add('active')

    startTimer()

})

button_stop.addEventListener('click', e => {
    clearInterval(timerId)
    button_stop.classList.remove('active')
    
    text.textContent = predictions[timer_text.textContent - 1]
})

