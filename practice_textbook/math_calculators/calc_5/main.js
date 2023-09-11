"use strict"

const input_1 = document.querySelector('.input-1');
const input_2 = document.querySelector('.input-2');
const input_3 = document.querySelector('.input-3');

const button = document.querySelector('.button');
const answer_block = document.querySelector('.triple-calculator__answer-main');

button.addEventListener('click', e => {
    const a = parseFloat(input_1.value);
    const b = parseFloat(input_2.value);

    if (!isNaN(a) && !isNaN(b)) {
        const divisors1 = [];
        for (var i = 1; i <= a; i++) {
            if (a % i === 0) {
                divisors1.push(i);
            }
        }

        const divisors2 = [];
        for (var i = 1; i <= b; i++) {
            if (b % i === 0) {
                divisors2.push(i);
            }
        }
    
        const commonDivisors = [];
        for (const divisor of divisors1) {
            if (divisors2.includes(divisor)) {
                commonDivisors.push(divisor);
            }
        }

        answer_block.textContent = `${Math.max(...commonDivisors)}`
    }
})