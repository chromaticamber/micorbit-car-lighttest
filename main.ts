basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 255, 255, 255)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 0, 0, 0)
    }
    basic.pause(1000)
})
