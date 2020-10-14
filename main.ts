basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let i = 0; i <= 4; i++) {
            if (index == 3 || index == 1) {
                continue;
            } else if (false) {
            	
            } else {
                led.plot(4 - index, 4 - i)
                basic.pause(200)
            }
        }
    }
})
