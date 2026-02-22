const body = document.body
const header = document.getElementById('header')
const btn = document.getElementById('button')
const SWitch = document.getElementById('switch')
const cards = [...document.querySelectorAll('.card')]
const headings = [...document.querySelectorAll('.txt-dark')]
const allP = [...document.getElementsByTagName('p')]
const smalls = [...document.querySelectorAll('.small')]


function dark() {
    body.classList.toggle('body-dark')
    header.classList.toggle('header-dark')
    btn.classList.toggle('button-position')
    btn.classList.toggle('button-dark')
    SWitch.classList.toggle('switch-dark')
    cards.forEach(card => {
        card.classList.toggle('card-dark')
    })
    headings.forEach(h => {
        h.classList.toggle('h-dark')
    })
    allP.forEach(p => {
        p.classList.toggle('p-dark')
    })
    smalls.forEach(small => {
        if (small.textContent === 'Dark Mode') {
            small.textContent = 'Light Mode'
        }
        else if (small.textContent === "Light Mode") {
            small.textContent = 'Dark Mode'
        }
        else if (small.textContent === "ღამის რეჟიმი") {
            small.textContent = 'დღის რეჟიმი'
        }
        else if (small.textContent === "დღის რეჟიმი") {
            small.textContent = 'ღამის რეჟიმი'
        }
    })





}

btn.addEventListener('click', dark);

