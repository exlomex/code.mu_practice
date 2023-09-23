"use strict"

const historicalEvents = {
    1901: [
        {
            date: '06.09.1901',
            description: "Убийство американского президента Уильяма Маккинли."
        },
        {
            date: '25.11.1901',
            description: "Открытие Теории относительности Альбертом Эйнштейном."
        }
    ],
    1914: [
        {
            date: '28.07.1914',
            description: "Начало Первой мировой войны."
        },
        {
            date: '15.08.1914',
            description: "Запуск Панамского канала."
        }
    ],
    1929: [
        {
            date: '29.10.1929',
            description: "Начало Великой депрессии в Соединенных Штатах."
        }
    ],
    1945: [
        {
            date: '15.08.1945',
            description: "Окончание Второй мировой войны и бомбардировки Хиросимы и Нагасаки."
        },
        {
            date: '24.10.1945',
            description: "Создание Организации Объединенных Наций (ООН)."
        }
    ],
    1969: [
        {
            date: '20.07.1969',
            description: "Первая посадка человека на Луну (Аполлон-11)."
        },
        {
            date: '29.04.1969',
            description: "Начало конфликта на острове Тайвань между Китаем и Тайванем."
        }
    ],
    1989: [
        {
            date: '09.11.1989',
            description: "Падение Берлинской стены, символа разделения Германии и Холодной войны."
        },
        {
            date: '08.12.1989',
            description: "Начало процесса распада Советского Союза."
        }
    ],
    2001: [
        {
            date: '11.09.2001',
            description: "Теракты 11 сентября в США."
        },
        {
            date: '20.11.2001',
            description: "Запуск первого модуля Международной космической станции (МКС)."
        }
    ],
    2011: [
        {
            date: '17.12.2010',
            description: "Арабская весна, серия протестов и революций в арабских странах."
        },
        {
            date: '20.10.2011',
            description: "Смерть лидера Ливии Муаммара Каддафи."
        }
    ],
    2016: [
        {
            date: '23.06.2016',
            description: "Великобритания проголосовала за выход из Европейского союза (Brexit)."
        },
        {
            date: '08.11.2016',
            description: "Индийский банкнотный кризис, связанный с демонетизацией высоких номиналов."
        }
    ],
    2020: [
        {
            date: '11.03.2020',
            description: "Глобальная пандемия COVID-19 и разработка вакцин против вируса."
        },
        {
            date: '25.05.2020',
            description: "Продолжение массовых протестов в США после убийства Джорджа Флойда."
        }
    ],
    1920: [
        {
            date: '11.11.1920',
            description: "Завершение Первой мировой войны и подписание Третьего Рейха Версальского договора."
        },
        {
            date: '18.08.1920',
            description: "Провозглашение женского избирательного права в США."
        }
    ],
    1935: [
        {
            date: '17.07.1935',
            description: "Начало Гражданской войны в Испании."
        },
        {
            date: '15.09.1935',
            description: "Введение Нюрнбергских законов в Германии."
        }
    ],
    1950: [
        {
            date: '25.06.1950',
            description: "Начало Корейской войны."
        },
        {
            date: '07.04.1950',
            description: "Основание Всемирной здравоохранительной организации (ВОЗ)."
        }
    ],
    1970: [
        {
            date: '01.11.1970',
            description: "Начало войны во Вьетнаме."
        },
        {
            date: '10.11.1970',
            description: "Первый запуск рабочей советской станции на Луну - Луна 17."
        }
    ],
    1990: [
        {
            date: '03.10.1990',
            description: "Завершение Холодной войны."
        },
        {
            date: '03.10.1990',
            description: "Объединение Германии."
        }
    ],
    2005: [
        {
            date: '14.02.2005',
            description: "Запуск YouTube, одной из крупнейших видеохостинговых платформ."
        },
        {
            date: '16.02.2005',
            description: "Введение Киотского протокола для сокращения выбросов парниковых газов."
        }
    ],
    2008: [
        {
            date: '15.09.2008',
            description: "Финансовый кризис, который повлиял на мировую экономику."
        },
        {
            date: '08.08.2008',
            description: "Олимпийские игры в Пекине, Китай."
        }
    ],
    2010: [
        {
            date: '04.01.2010',
            description: "Завершение строительства Бурдж-Халифа, самого высокого небоскреба в мире."
        },
        {
            date: '03.04.2010',
            description: "Запуск планшета iPad компании Apple, что изменило понятие о портативных устройствах."
        }
    ]
};

let table = document.querySelector('.events')
let input = document.querySelector('.input')

function printEvents() {
    let input_value = input.value.toLowerCase()

    let rows = document.querySelectorAll('.events__row')
    rows.forEach(row => {
        if (row) {
            row.remove()
        }
    });


    if (input_value.length > 0) {
        if (historicalEvents[input_value]) {
            let count = 1

            for (const events of historicalEvents[input_value]) {
                let tr = document.createElement('tr')
                tr.classList.add('events__row')

                let td = document.createElement('td')
                td.classList.add('events__cell')
                td.textContent = count
                tr.appendChild(td)

                let td_1 = document.createElement('td')
                td_1.classList.add('events__cell')
                td_1.textContent = events['date']
                tr.appendChild(td_1)

                let td_2 = document.createElement('td')
                td_2.classList.add('events__cell')
                td_2.textContent = events['description']
                tr.appendChild(td_2)

                count++
                table.appendChild(tr)
            }
        } else {
            alert(`Год не был найден`)
        }

    }

}

input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        printEvents()
    }
})

