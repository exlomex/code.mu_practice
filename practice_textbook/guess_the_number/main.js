"use strict"

const input_1 = document.querySelector('.input-1');

const button = document.querySelector('.button');
const answer_block = document.querySelector('.game__answer-main');

// random value
const randomValue = Math.floor(Math.random() * 100) + 1

button.addEventListener('click', e => {
    const a = parseFloat(input_1.value);

    if (!isNaN(a)) {
        if (a < randomValue) {
            answer_block.textContent = `Введите число побольше`;
        } else if (a > randomValue) {
            answer_block.textContent = `Введите число поменьше`;
        } else if (a === randomValue) {
            answer_block.textContent = `Поздравляю, вы угадали число!`;
        }
    }
})
