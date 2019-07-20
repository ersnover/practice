setInterval(() => {
    let now = new Date()

    let seconds = now.getSeconds()
    let secDeg = 6 * seconds + 90
    const secondHand = document.getElementsByClassName("second-hand")[0]
    secondHand.style.transform = `rotate(${secDeg}deg)`

    let minutes = now.getMinutes()
    let minDeg = 6 * minutes + 90
    const minuteHand = document.getElementsByClassName("minute-hand")[0]
    minuteHand.style.transform = `rotate(${minDeg}deg)`

    let hours = now.getHours()
    if (hours > 12) {
        hours -= 12
    }
    let hourDeg = 30 * hours + 90
    const hourHand = document.getElementsByClassName("hour-hand")[0]
    hourHand.style.transform = `rotate(${hourDeg}deg)`

},1000)
