let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    //innerHTML = para se conseguir adicionar um texto dentro
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time
    //se time <10, retorne isso, caso contrário, retorne isso.
}

setInterval(updateClock, 1000)