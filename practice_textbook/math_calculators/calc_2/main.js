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
        const max_num = Math.max(a,b,c);
        if (max_num === a) {
            const answer = a ** 2 === b ** 2 + c ** 2
            answer ? answer_block.textContent = `Числа являются Пифагоровой тройкой` : answer_block.textContent = `Числа не являются Пифагоровой тройкой`
            console.log(answer)
        } else if (max_num === b) {
            const answer = b ** 2 === a ** 2 + c ** 2
            answer ? answer_block.textContent = `Числа являются Пифагоровой тройкой` : answer_block.textContent = `Числа не являются Пифагоровой тройкой`
            console.log(answer)
        } else {
            const answer = c ** 2 === b ** 2 + a ** 2
            answer ? answer_block.textContent = `Числа являются Пифагоровой тройкой` : answer_block.textContent = `Числа не являются Пифагоровой тройкой`
            console.log(answer)
        }
        
    }
})