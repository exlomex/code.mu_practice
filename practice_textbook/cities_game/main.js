"use strict"

const allCities = ["Москва", "Санкт-петербург", "Новосибирск",
    "Екатеринбург", "Нижний Новгород", "Казань", "Челябинск", "Омск",
    "Самара", "Ростов-на-дону", "Уфа", "Красноярск", "Пермь", "Воронеж",
    "Волгоград", "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск",
    "Ульяновск", "Барнаул", "Иркутск", "Хабаровск", "Ярославль", "Владивосток",
    "Махачкала", "Томск", "Оренбург", "Кемерово", "Новокузнецк", "Рязань",
    "Астрахань", "Набережные Челны", "Пенза", "Липецк", "Тула", "Киров", "Калининград", "Брянск", "Тверь", "Мурманск", "Магнитогорск",
    "Курск", "Улан-Удэ", "Ставрополь", "Тамбов", "Владикавказ", "Якутск",
    "Смоленск", "Иваново", "Белгород", "Курган", "Тобольск", "Стерлитамак",
    "Бийск", "Комсомольск-на-амуре", "Великий новгород", "Прокопьевск",
    "Химки", "Вологда", "Мытищи", "Южно-сахалинск", "Сыктывкар", "Кострома",
    "Петрозаводск", "Нижневартовск", "Братск", "Новороссийск",
    "Дзержинск", "Орск", "Благовещенск", "Энгельс", "Рыбинск", "Ангарск",
    "Салават", "Изевск", "Железногорск", "Хасавюрт", "Электросталь", "Королев",
    "Волжский", "Новочеркасск", "Пушкино", "Димитровград", "Майкоп",
    "Каменск-уральский", "Северодвинск", "Армавир", "Щекино", "Ессентуки",
    "Находка", "Одинцово", "Керчь", "Сызрань", "Нефтеюганск", "Раменское",
    "Копейск", "Новошахтинск", "Нефтекамск", "Новокуйбышевск",
    "Лысьва", "Рубцовск", "Серпухов", "Ковров", "Коломна", "Сергиев Посад",
    "Новомосковск", "Черкесск", "Ачинск", "Северск", "Воткинск", "Шадринск",
    "Славянск-на-кубани", "Назрань", "Серов", "Гатчина", "Губкин", "Муром",
    "Озерск", "Зеленодольск", "Кисловодск", "Михайловск", "Щелково",
    "Новоуральск", "Ясногорск", "Железногорск", "Новотроицк",
    "Каспийск", "Геленджик", "Краснотурьинск", "Междуреченск", "Лениногорск",
    "Арзамас", "Электроугли", "Бердск", "Копейск", "Альметьевск", "Ишим",
    "Глазов", "Ноябрьск", "Анапа", "Воскресенск", "Астана"
];

let usedCities = []

const text = document.querySelector('.text')
const input = document.querySelector('.input')

input.addEventListener('keyup', e => {
    let city
    if (e.key === 'Enter') {
        console.log(usedCities)

        city = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase();
        if (city) {
            if (!allCities.includes(city)) {
                text.textContent = 'Такого города робот не знает!'
            } else if (usedCities.includes(city)) {
                text.textContent = 'Вы ввели город который уже был в игре.'
            } else {
                if (usedCities.length === 0) {
                    usedCities.push(city)

                    let robotCity = randomWord()
                    text.textContent = `Слово робота: ${robotCity}`

                    input.value = ''

                } else {
                    let [firstCityLetter, lastUsedCityLetter] = checkedLastFirstLetters(city)

                    if (firstCityLetter === lastUsedCityLetter) {
                        usedCities.push(city)

                        let robotCity = randomWord()
                        text.textContent = `Слово робота: ${robotCity}`

                        input.value = ''

                    } else {
                        text.textContent = 'Слово начинается не с последней буквы слова робота'
                    }
                }
            }
        }
    }
})

function randomWord() {
    let robotCity = allCities[Math.floor(Math.random() * (allCities.length - 0 + 1)) + 0]

    let [firstCityLetter, lastUsedCityLetter] = checkedLastFirstLetters(robotCity)

    if (!usedCities.includes(robotCity) && robotCity && firstCityLetter === lastUsedCityLetter) {
        usedCities.push(robotCity)
        return robotCity
    } else {
        return randomWord()
    }

}

function checkedLastFirstLetters(city) {
    let firstCityLetter = city[0].toLowerCase()

    let lastUsedCity = usedCities[usedCities.length - 1]
    let lastUsedCityLetter = lastUsedCity[lastUsedCity.length - 1].toLowerCase()
    if (lastUsedCityLetter === 'ь' || lastUsedCityLetter === 'ы') {
        lastUsedCityLetter = lastUsedCity[lastUsedCity.length - 2].toLowerCase()
    }

    return [firstCityLetter, lastUsedCityLetter]
}
