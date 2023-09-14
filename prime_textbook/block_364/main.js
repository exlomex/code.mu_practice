"use strict"


// 1 / Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
const tag_input_1 = document.querySelector('.input_1');
const tag_p_1 = document.querySelector('.p_1');

tag_input_1.addEventListener('blur', e => {
    tag_p_1.textContent += e.target.value;
    e.target.value = '';
})


// 2 / Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
const tag_input_2_1 = document.querySelector('.input_2_1');
const tag_input_2_2 = document.querySelector('.input_2_2');
const tag_p_2 = document.querySelector('.p_2');
const button_2 = document.querySelector('.button_2');


button_2.addEventListener('click', e => {
    const a = tag_input_2_1.value;
    const b = tag_input_2_2.value;
    if (!isNaN(a) & !isNaN(b)) {
        tag_p_2.textContent = +a + +b
        tag_input_2_1.value = '';
        tag_input_2_2.value = '';
    }
})



// 3 / Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
const tag_input_3 = document.querySelector('.input_3');
const tag_p_3 = document.querySelector('.p_3');

tag_input_3.addEventListener('blur', e => {
    const full_num = e.target.value;
    if (!isNaN(full_num)) {
        let sum = 0;
        for (const num of full_num) {
            sum += +num;
        }
        tag_p_3.textContent = sum;
    }
    e.target.value = '';
})


// 4 / Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
const tag_input_4 = document.querySelector('.input_4');
const tag_p_4 = document.querySelector('.p_4');

tag_input_4.addEventListener('blur', e => {
    const full_num = e.target.value.split(',');
    let sum = 0;
    for (const num of full_num) {
        sum += +num;
    }
    const middle = sum / full_num.length;
    tag_p_4.textContent = middle.toFixed(3);

    e.target.value = '';
})

// 5 /  Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
const tag_input_5_1 = document.querySelector('.input_5_1');
const tag_input_5_2 = document.querySelector('.input_5_2');
const tag_input_5_3 = document.querySelector('.input_5_3');
const tag_input_5_4 = document.querySelector('.input_5_4');

tag_input_5_1.addEventListener('blur', e => {
    const fio = e.target.value.split(' ');

    tag_input_5_2.value = fio[0];
    tag_input_5_3.value = fio[1];
    tag_input_5_4.value = fio[2];

    e.target.value = '';
})

// 6 / Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
const tag_input_6 = document.querySelector('.input_6');

tag_input_6.addEventListener('blur', e => {
    let answer = ''
    const fio = e.target.value.split(' ');
    for (const part of fio) {
        answer += (part[0].toUpperCase() + part.slice(1)) + ' '
    }

    e.target.value = answer.slice(0, -1);
})

// 7 / Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
const tag_input_7 = document.querySelector('.input_7');
const p_7 = document.querySelector('.p_7');

tag_input_7.addEventListener('blur', e => {
    const text = e.target.value.split(' ');

    e.target.value = '';
    p_7.textContent = `${text.length} слова`
})

// 8 / Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
const tag_input_8 = document.querySelector('.input_8');

tag_input_8.addEventListener('blur', e => {
    const date = e.target.value.split('.')
    e.target.value = `${date[2]}.${date[1]}.${date[0]} `
})

// 9 / Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
const tag_input_9 = document.querySelector('.input_9');
const tag_button_9 = document.querySelector('.button_9');

tag_button_9.addEventListener('click', e => {
    const value = tag_input_9.value;
    const value_1 = tag_input_9.value.split('').reverse().join('');
    console.log(value, value_1)

    if (value == value_1) {
        tag_input_9.value = true;
    } else {
        tag_input_9.value = false;
    }
})

// 10 / Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
const tag_input_10 = document.querySelector('.input_10');

tag_input_10.addEventListener('blur', e => {
    if (e.target.value.includes('3')) {
        e.target.value = true
    } else {
        e.target.value = false
    }
})

// 11 / Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
const tag_p_11_1 = document.querySelector('.p_11_1');
const tag_p_11_2 = document.querySelector('.p_11_2');
const tag_p_11_3 = document.querySelector('.p_11_3');
const tag_button_11 = document.querySelector('.button_11');

tag_button_11.addEventListener('click', e => {
    tag_p_11_1.textContent += 1
    tag_p_11_2.textContent += 2
    tag_p_11_3.textContent += 3
})

// 12 / Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
const tag_a_12 = document.querySelectorAll('.a_12')

tag_a_12.forEach(tag_a => {
    tag_a.textContent = tag_a.href;
});

// 13 / Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
const tag_a_13 = document.querySelectorAll('.a_13')

tag_a_13.forEach(tag_a => {
    if (tag_a.href.startsWith("http://")) {
        tag_a.textContent = tag_a.href + `→`;
    } else {
        tag_a.textContent = tag_a.href;
    }
});

// 14 / Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
const tag_p_14 = document.querySelectorAll('.p_14')

tag_p_14.forEach(tag_p => {
    tag_p.addEventListener('click', e => {
        const number = e.target;
        if (!isNaN(number.textContent)) {
            number.textContent = ` ${number.textContent ** 2}`
        }
    })
});

// 15 / Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
const tag_input_15 = document.querySelector('.input_15')

tag_input_15.addEventListener('blur', e => {
    const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const date = e.target.value.split('.')
    const dayOfWeek = new Date(+date[2], +date[1] - 1, +date[0]).getDay()
    e.target.value = daysOfWeek[dayOfWeek]
})

// 16 / Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
const tag_input_16 = document.querySelector('.input_16')
const tag_button_16_1 = document.querySelector('.button_16_1')
const tag_button_16_2 = document.querySelector('.button_16_2')

tag_button_16_2.addEventListener('click', e => {
    const curVal = parseInt(tag_input_16.value)
    tag_input_16.value = curVal + 1
})

tag_button_16_1.addEventListener('click', e => {
    const curVal = parseInt(tag_input_16.value)
    if (curVal > 0) {
        tag_input_16.value = curVal - 1
    }
})

// 17 / Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
const tag_input_17 = document.querySelector('.input_17')
const tag_p_17 = document.querySelectorAll('.p_17')

let sumOfClicks = 0;
tag_p_17.forEach(tag_p => {
    tag_p.addEventListener('click', e => {
        sumOfClicks += 1;
        tag_input_17.value = sumOfClicks
    })
})

// 18 / На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
const tag_div_18 = document.querySelectorAll('.div_18')

tag_div_18.forEach(div_18 => {
    if (div_18.textContent.length > 10) {
        div_18.textContent = div_18.textContent.slice(0, 10) + '...';
    }
});

// 19 / Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
const tag_input_19 = document.querySelector('.input_19')

tag_input_19.addEventListener('blur', e => {
    const inpValue = e.target.value
    if (e.target.value > 1 && e.target.value <= 100) {
        e.target.style.color = 'green'
    } else {
        e.target.style.color = 'red'
    }
})

// 20 / Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
const tag_input_20 = document.querySelector('.input_20')
const tag_button_20 = document.querySelector('.button_20')

function RandomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

tag_button_20.addEventListener('click', e => {
    const rndString = RandomString();

    tag_input_20.value = rndString;
})

// 21 / Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
const tag_input_21 = document.querySelector('.input_21')
const tag_button_21 = document.querySelector('.button_21')

function shuffleString(inputString) {
    const characters = inputString.split('');
    const shuffledArray = [];

    while (characters.length > 0) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shuffledArray.push(characters.splice(randomIndex, 1)[0]);
    }

    return shuffledArray.join('');
}

tag_button_21.addEventListener('click', e => {
    const rndString = shuffleString(tag_input_21.value);

    tag_input_21.value = rndString;
})

// 22 / Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
const tag_input_22 = document.querySelector('.input_22')
const tag_button_22 = document.querySelector('.button_22')
const tag_p_22 = document.querySelector('.p_22')

function farToCels(farValue) {
    return ((farValue - 32) * 5 / 9).toFixed(3);
}

tag_button_22.addEventListener('click', e => {
    tag_p_22.textContent = farToCels(tag_input_22.value)
})


// 23 / Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
const tag_input_23 = document.querySelector('.input_23')
const tag_button_23 = document.querySelector('.button_23')
const tag_p_23 = document.querySelector('.p_23')

function factorial(number) {
    let result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

tag_button_23.addEventListener('click', e => {
    tag_p_23.textContent = factorial(tag_input_23.value)
})


// 24 / Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
const tag_input_24_a = document.querySelector('.input_24_1')
const tag_input_24_b = document.querySelector('.input_24_2')
const tag_input_24_c = document.querySelector('.input_24_3')

const tag_button_24 = document.querySelector('.button_24')
const tag_p_24 = document.querySelector('.p_24')

function equation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1.toFixed(2), x2.toFixed(2)];
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        return [x.toFixed(2)];
    } else {
        return 'Действительных корней нет'
    }
}

tag_button_24.addEventListener('click', e => {
    tag_p_24.textContent = equation(parseInt(tag_input_24_a.value), parseInt(tag_input_24_b.value), parseInt(tag_input_24_c.value))
})






