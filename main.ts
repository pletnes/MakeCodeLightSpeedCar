basic.forever(function () {
    bitbot.setPixelColor((bitbot.readLight(BBLightSensor.Left) - bitbot.readLight(BBLightSensor.Right)) * 0.01, 0xFF0000)
})
