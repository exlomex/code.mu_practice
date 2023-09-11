"use strict"

const input_1 = document.querySelector('.input-1');

const button = document.querySelector('.button');
const answer_block = document.querySelector('.triple-calculator__answer-main');

button.addEventListener('click', e => {
    const a = parseFloat(input_1.value);

    if (!isNaN(a)) {
        const divisors = [];
        for (var i = 1; i <= a; i++) {
            if (a % i === 0) {
                divisors.push(i);
            }
        }
        answer_block.textContent = `${divisors}`;
    }
})