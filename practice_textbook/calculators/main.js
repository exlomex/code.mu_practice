"use strict"

// Площадь и периметр квадрата
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

        const currentHeight = squareCalculator.clientHeight;
        if (currentHeight === 217) {
            squareCalculator.style.height = currentHeight + 60 + 'px'
        }

        if (squareAnswer.classList.contains('squareCalculator__answer-block--visible')) {
            squareAnswer.classList.remove('squareCalculator__answer-block--visible')
        }

        pArea.textContent = `p = ${squarePerimeter}`;
        sArea.textContent = `s = ${squareArea}`;

        squareForm.value = ''
    }
})



// Площадь и периметр прямоугольника
const rectangleCalculator = document.querySelector(".rectangleCalculator");
const rectangleButton = document.querySelector(".rectangleCalculator__button");

const rectangleFormLen = document.querySelector(".rectangleCalculator__input-len");
const rectangleFormWidth = document.querySelector(".rectangleCalculator__input-width");

const rectangleAnswer = document.querySelector(".rectangleCalculator__answer-block");
const pArea_rectangle = document.querySelector(".rectangleCalculator__answer-pArea");
const sArea_rectangle = document.querySelector(".rectangleCalculator__answer-sArea");

rectangleButton.addEventListener('click', e => {
    const lenValue = parseFloat(rectangleFormLen.value)
    const WidthValue = parseFloat(rectangleFormWidth.value)
    if (!isNaN(lenValue) && !isNaN(WidthValue)) {
        const rectangleArea = lenValue * WidthValue;
        const rectanglePerimeter = (lenValue + WidthValue) * 2;

        const currentHeight = rectangleCalculator.clientHeight;
        if (currentHeight === 217) {
            rectangleCalculator.style.height = currentHeight + 60 + 'px'
        }


        if (rectangleAnswer.classList.contains('rectangleCalculator__answer-block--visible')) {
            rectangleAnswer.classList.remove('rectangleCalculator__answer-block--visible')
        }

        pArea_rectangle.textContent = `p = ${rectanglePerimeter}`;
        sArea_rectangle.textContent = `s = ${rectangleArea}`;

        rectangleFormLen.value = '';
        rectangleFormWidth.value = '';

    }
})



// Площадь круга и длину окружности
const circleCalculator = document.querySelector(".circleCalculator");
const circleButton = document.querySelector(".circleCalculator__button");

const circleForm = document.querySelector(".circleCalculator__input");

const circleAnswer = document.querySelector(".circleCalculator__answer-block");
const cArea_circle = document.querySelector(".circleCalculator__answer-cArea");
const sArea_circle = document.querySelector(".circleCalculator__answer-sArea");

circleButton.addEventListener('click', e => {
    const radius = parseFloat(circleForm.value)
    if (!isNaN(radius)) {
        const circleArea = Math.round(Math.PI * radius ** 2);
        const circleLen = Math.round(2 * Math.PI * radius);

        const currentHeight = circleCalculator.clientHeight;
        if (currentHeight === 217) {
            circleCalculator.style.height = currentHeight + 60 + 'px'
        }


        if (circleAnswer.classList.contains('circleCalculator__answer-block--visible')) {
            circleAnswer.classList.remove('circleCalculator__answer-block--visible')
        }

        cArea_circle.textContent = `c = ${circleArea}`;
        sArea_circle.textContent = `s = ${circleLen}`;

        circleForm.value = '';

    }
})



// Площадь треугольника
const triangleCalculator = document.querySelector(".triangleCalculator");
const triangleButton = document.querySelector(".triangleCalculator__button");

const triangleForm_a = document.querySelector(".triangleCalculator__input-a");
const triangleForm_b = document.querySelector(".triangleCalculator__input-b");
const triangleForm_c = document.querySelector(".triangleCalculator__input-c");

const triangleAnswer = document.querySelector(".triangleCalculator__answer-block");
const sArea_triangle = document.querySelector(".triangleCalculator__answer-sArea");

triangleButton.addEventListener('click', e => {
    const aValue = parseFloat(triangleForm_a.value)
    const bValue = parseFloat(triangleForm_b.value)
    const cValue = parseFloat(triangleForm_c.value)

    if (!isNaN(aValue) && !isNaN(bValue) && !isNaN(cValue) && (aValue + bValue > cValue && aValue + cValue > bValue && bValue + cValue > aValue)) {
    const half_s = (aValue + bValue + cValue) / 2;
    const triangleArea = Math.sqrt(half_s * (half_s - aValue) * (half_s - bValue) * (half_s - cValue));

    const currentHeight = triangleCalculator.clientHeight;
    if (currentHeight === 217) {
        triangleCalculator.style.height = currentHeight + 60 + 'px'
    }


    if (triangleAnswer.classList.contains('triangleCalculator__answer-block--visible')) {
        triangleAnswer.classList.remove('triangleCalculator__answer-block--visible')
    }

    sArea_triangle.textContent = `s = ${triangleArea.toFixed(4)}`;

    triangleForm_a.value = '';
    triangleForm_b.value = '';
    triangleForm_c.value = '';


}
})