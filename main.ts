basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let i = 0; i <= 4; i++) {
            if (index == 3 || index == 1) {
                led.plot(4 - index, i)
                basic.pause(200)
            } else {
                led.plot(4 - index, 4 - i)
                basic.pause(200)
            }
        }
    }
    basic.clearScreen()
})
