"use strict";

// 1 / Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i < 101; i++) {
    console.log(i);
}

// 2 / Выведите с помощью цикла столбец чисел от 100 до 1.
for (let i = 100; i > 0; i--) {
    console.log(i);
}

// 3 / Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 1; i < 101; i++) {
    i % 2 == 0 ? console.log(i) : NaN;
}

// 4 / Заполните массив 10-ю иксами с помощью цикла.
let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4.push('x');
}
console.log(arr4);

// 5 / Заполните массив числами от 1 до 10 с помощью цикла.
let arr5 = [];
for (let i = 0; i < 10; i++) {
    arr5.push(i + 1);
}
console.log(arr5);

// 6 / Дан массив с числами. 
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
const arr6 = [-22, 1, 3, 13, 13, 3, 4, 3, 45];
for (const num of arr6) {
    num > 0 && num < 10 ? console.log(num) : NaN;
}

// 7 / Дан массив с числами. 
// С помощью цикла проверьте, что в нем есть элемент со значением 5.
const arr7 = [-22, 1, 3, 13, 13, 3, 4, 3, 45, 5];
let flag7 = false;
for (const num of arr7) {
    if (num == 5) {
        flag7 = true;
    };
}
console.log(flag7);

// 8 / Дан массив с числами. 
// С помощью цикла найдите сумму элементов этого массива.
const arr8 = [-22, 1, 3, 13, 13, 3, 4, 3, 45, 5];
let sum8 = 0;
for (const num of arr8) {
    sum8 += num;
}
console.log(sum8);

// 9 / Дан массив с числами. 
// С помощью цикла найдите сумму квадратов элементов этого массива.
const arr9 = [-22, 1, 3, 13, 13, 3, 4, 3, 45, 5];
let sum9 = 0;
for (const num of arr9) {
    sum9 += num ** 2;
}
console.log(sum9);

// 10 / Дан массив с числами. 
// Найдите среднее арифметическое его элементов.
const arr10 = [-22, 1, 3, 13, 13, 3, 4, 3, 45, 5];
let sum10 = 0;
for (const num of arr10) {
    sum10 += num;
}
console.log(sum10 / arr10.length);


// 11 / Напишите скрипт, который будет находить факториал числа. 
// Факториал - это произведение всех целых чисел от единицы до заданного числа.
const number11 = 5;
let factorial11 = 1;
for (let i = 1; i < number11 + 1; i++) {
    factorial11 *= i;
}
console.log(factorial11)


// 12 / Заполните массив числами от 10 до 1 с помощью цикла.
let arr12 = [];
for (let i = 10; i > 0; i--) {
    arr12.push(i);
}
console.log(arr12);


// 13 / Дан массив с числами. Числа могут быть положительными и отрицательными. 
// Найдите сумму положительных элементов массива.
const arr13 = [1, 23, 1, 31, 31, 31, 3, 5, 4, -6, -22, -45, -456];
let sum13 = 0;
for (const num of arr13) {
    if (num >= 0) {
        sum13 += num;
    }
}
console.log(sum13);


// 14 / Дан массив числами, например:
// let arr = [10, 20, 30, 50, 235, 3000];
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
const arr14 = [1, 23, 1, 31, 31, 31, 3, 5, 4, -6, -22, -45, -456];
for (const num of arr14) {
    if (String(num)[0] == '-') {
        if (String(num)[1] == 1 || String(num)[1] == 2 || String(num)[1] == 5) {
            console.log(num)
        }
    } else {
        if (String(num)[0] == 1 || String(num)[0] == 2 || String(num)[0] == 5) {
            console.log(num)
        }
    }
}

// 15 / Дан массив с числами. Выведите элементы этого массива в обратном порядке.
const arr15 = [1, 23, 1, 31, 31, 31, 3, 5, 4, -6, -22, -45, -456];
for (let i = arr15.length - 1; i > -1; i--) {
    console.log(arr15[i]);
}


// 16 / Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
const arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr16) {
    document.write(`${num} <br>`);
}


// 17 / Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
const arr17 = [1, 23, 43, 4, 55, 6, 67, 85, 79, 10];
for (let i = 1; i < arr17.length + 1; i++) {
    i == arr17[i - 1] ? console.log(arr17[i - 1]) : NaN
}


// 18 / Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
const arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr18) {
    document.write(`<p> ${num} </p>`);
}


// 19 / Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
const week19 = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];
for (let i = 0; i < week19.length; i++) {
    if (i < 5) {
        document.body.innerHTML += `${week19[i]}<br>`;
    } else {
        document.body.innerHTML += `<b>${week19[i]}</b><br>`;
    }

}

// 20 / Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
const week20 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const curDate = new Date();
const curDayOfWeekNum = curDate.getDay();
const curDayOfWeek = week20[curDayOfWeekNum];

for (const day of week20) {
    if (day == curDayOfWeek) {
        document.body.innerHTML += `<i>${day}</i><br>`;
    } else {
        document.body.innerHTML += `${day}<br>`;
    }
}


// 21 / Дан следующий объект с работниками и их зарплатами:
let obj21 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
// Увеличьте зарплату каждого работника на 10%.
for (const employee in obj21) {
    obj21[employee] += (obj21[employee] * 0.1);
}
console.log(obj21);

// 22 / Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
for (const employee in obj21) {
    if (obj21[employee] <= 400) {
        obj21[employee] += (obj21[employee] * 0.1);
    };
}
console.log(obj21);


// 23 / Даны следующие массивы:
let arr1_23 = [1, 2, 3, 4, 5];
let arr2_23 = [6, 7, 8, 9, 10];
let obj23 = {};
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
for (let i = 0; i < arr1_23.length; i++) {
    obj23[arr1_23[i]] = arr2_23[i];
}
console.log(obj23);

// 24 / Дан следующий объект:
let obj24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let keySum = 0;
let valSum = 0;
for (const key in obj24) {
    keySum += key;
    valSum += obj24[key];
}
let answer24 = keySum / valSum;
console.log(answer24);


// 25 / Дан следующий объект:
let obj25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// Запишите ключи этого объекта в один массив, а значения - в другой.
let arr1_25 = [];
let arr2_25 = [];
for (const key in obj25) {
    arr1_25.push(key);
    arr2_25.push(obj25[key]);
}
console.log(arr1_25, arr2_25);

// 26 / Дан следующий объект:
let obj26 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};


// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. 
// То есть у вас в результате получится вот такой массив:
// [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];
let arr26 = [];
for (const key in obj26) {
    if (String(obj26[key])[0] == 1 || String(obj26[key])[0] == 2) {
        arr26.push(obj26[key]);
    }
}
console.log(arr26);


// 27 / Дан следующий массив:
let arr27 = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
let obj27 = {};
for (let i = 0; i < arr27.length; i++) {
    obj27[i + 1] = arr27[i];
}
console.log(obj27)


// 28 / Дан следующий массив:
let arr28 = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let obj28 = {};
for (let i = 0; i < arr28.length; i++) {
    obj28[arr28[i]] = i + 1;
}
console.log(obj28);
