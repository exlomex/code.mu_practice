// 1 / Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function elementsSum(arr) {
    if (Array.isArray(arr) && Array.length !== 0) {
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }
        return sum;
    }
    return undefined;
}

// 2 / Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function divisors(num) {
    if (typeof num === 'number') {
        let devisors = [];
        for (let i = 1; i < num + 1; i++) {
            if (num % i == 0) {
                devisors.push(i);
            }
        }
        return devisors;
    }
    return NaN;
}

// 3 / Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function symbols(string) {
    if (typeof string === 'string' && string.length !== 0) {
        let arr = [];
        for (const symbol of string) {
            arr.push(symbol);
        }
        return arr;
    }
    return undefined;
}

// 4 / Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function reverseSymbols(originalStr) {
    if (typeof originalStr === 'string' && originalStr.length !== 0) {
        let reverseStr = '';
        for (let i = originalStr.length - 1; i > -1; i--) {
            reverseStr += originalStr[i];
        }
        return reverseStr;
    }
    return undefined;
}

// 5 / Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function capitalFirstLetter(string) {
    if (typeof string === 'string' && string.length !== 0) {
        return string[0].toUpperCase() + string.slice(1);
    }
    return undefined;
}

// 6 / Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
function everyWordCapitalLetter(string) {
    if (typeof string === 'string' && string.length !== 0) {
        let arrOfWords = [];
        for (const word of string.split(' ')) {
            arrOfWords.push(word[0].toUpperCase() + word.slice(1));
        }
        return arrOfWords.join(' ')
    }
    return undefined;
}

// 7 / Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function massFrom1toNum(num) {
    if (typeof num === 'number' && num !== 0) {
        let arr = [];
        for (let i = 1; i < num + 1; i++) {
            arr.push(i);
        }
        return arr;
    }
    return NaN;
}

// 8 / Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function numSum(num) {
    if (typeof num === 'number' && num !== 0) {
        let sum = 0;
        for (const sliceNum of num.toString()) {
            sum += +sliceNum;
        }
        return sum;
    }
    return NaN;
}

// 9 / Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function leapYear(year) {
    // Год считается високосным, если он делится на 4 без остатка, 
    // но не делится на 100 без остатка, или если он делится на 400 без остатка.
    if (typeof year === 'number' && year !== 0) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return true;
        }
        return false;
    }
    return NaN;
}

// 10 / Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function dayCountInSec(seconds) {
    if (typeof seconds === 'number') {
        let dayOfSec = seconds / 60 / 60 / 24
        return Math.round(dayOfSec);
    }
    return NaN;
}

// 11 / Сделайте функцию, которая будет возвращать случайный элемент из массива.
function randomEl(arr) {
    if (Array.isArray(arr) && arr.length !== 0) {
        const rndIndex = Math.floor(Math.random() * arr.length);
        return arr[rndIndex];
    }
    return undefined
    

}

// 12 / Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function simpleNum(num) {
    if (typeof num === 'number' && num !== 0) {
        if (num <= 1) {
            return false;
        }
        if (num <= 3) {
            return true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            return false; 
        }
        // Все простые числа > 3 имеют вид 6k ± 1
        for (let i = 5; i * i <= num; i += 6) { 
            if (num % i === 0 || num % (i + 2) === 0) {
                return false; // Если число делится на i или i + 2, то оно не простое
            }
        }
        return true;
    }
    return NaN;
}


// tests
console.log(elementsSum([1, 2, 3, 4, 5]));
console.log(divisors(10));
console.log(symbols('sybsada'));
console.log(reverseSymbols('letter'));
console.log(capitalFirstLetter('letter'));
console.log(everyWordCapitalLetter('hello, world! and everyone'));
console.log(massFrom1toNum(25));
console.log(numSum(123));
console.log(leapYear(2020));
console.log(dayCountInSec(99999));
console.log(randomEl([1,2,34,4,5,6,76,4,6,3]));
console.log(simpleNum(103));