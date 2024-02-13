const list = document.querySelector('table')
const button = document.querySelector('button')
const p = document.querySelector('p')
const numbers = []
const string = ''
let totalRows= 0

button.addEventListener('click', () => {
    for(let i = 0; i<7;i++)
    numbers[i] = randomIntFromInterval(0,9)
    console.log(numbers)
    addTableRow()
})

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const addTableRow = () => {
    const tr = list.insertRow()
        const td1 = tr.insertCell(0)
        totalRows++
        p.innerHTML = 'Arvottuja rivejä: '+ totalRows
        td1.innerHTML = '<a>'+  numbers[0] + '</a>' + ' ' + '<a>'+  numbers[0] + '</a>' + ' ' + '<a>'+  numbers[2] + '</a>' + ' ' + '<a>'+  numbers[3] + '</a>' + ' ' + '<a>'+  numbers[4] + '</a>' + ' ' + '<a>'+  numbers[5] + '</a>' + ' ' + '<a>'+  numbers[6] + '</a>'
        //td1.innerHTML = numbers[0] + ' ' +numbers[1] + ' ' +numbers[2] + ' ' +numbers[3] + ' ' +numbers[4] + ' ' +numbers[5] + ' ' +numbers[6]
}