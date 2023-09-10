"use strict"

const squareCalculator = document.querySelector(".squareCalculator");
const squareButton = document.querySelector(".squareCalculator__button");
const squareForm = document.querySelector(".squareCalculator__input");
const squareAnswer = document.querySelector(".squareCalculator__answer-block");
const pArea = document.querySelector(".squareCalculator__answer-pArea");
const sArea = document.querySelector(".squareCalculator__answer-sArea");

squareButton.addEventListener('click', e => {
    const lenValue = parseFloat(squareForm.value)
    if (!isNaN(lenValue)) {
        const squareArea = lenValue ** 2;
        const squarePerimeter = lenValue * 4;
        console.log(squareArea, squarePerimeter)

        const currentHeight = squareCalculator.clientHeight;
        if (currentHeight === 214) {
            squareCalculator.style.height = currentHeight + 60 + 'px'
        }

        if (squareAnswer.classList.contains('squareCalculator__answer-block--visible')) {
            squareAnswer.classList.remove('squareCalculator__answer-block--visible')
        }

        pArea.textContent = `p = ${squarePerimeter}`;
        sArea.textContent = `s = ${squareArea}`;
    }
})