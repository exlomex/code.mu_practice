"use strict"

const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        if (!tab.classList.contains('active')) {
            removeActive()

            tab.classList.toggle('active')
        } else {
            tab.classList.toggle('active')
        }
    })
});

function removeActive() {
    for (const tab of tabs) {
        if (tab.classList.contains('active')) {
            tab.classList.remove('active')
        }
    }
}