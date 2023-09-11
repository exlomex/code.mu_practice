"use strict"

const input_1 = document.querySelector('.input-1');
const input_2 = document.querySelector('.input-2');
const input_3 = document.querySelector('.input-3');

const button = document.querySelector('.button');
const answer_block = document.querySelector('.triple-calculator__answer-main');

button.addEventListener('click', e => {
    const a = parseFloat(input_1.value);
    const b = parseFloat(input_2.value);
    const c = parseFloat(input_3.value);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        const discriminant = b ** 2 - 4 * a * c;
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            answer_block.textContent = `x1 = ${x1.toFixed(3)}, x2 = ${x2.toFixed(3)}`
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            answer_block.textContent = `x = ${x.toFixed(3)}`
        } else {
            answer_block.textContent = `Нет корней`
        }

    }
})