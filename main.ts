led.enable(false)
let distance = 0
// RGB (GRB format)
let strip = neopixel.create(DigitalPin.P13, 8, NeoPixelMode.RGB)
strip.setBrightness(127)
strip.clear()
strip.show()
let range1 = strip.range(0, 1)
let range2 = strip.range(0, 2)
let range3 = strip.range(0, 3)
let range4 = strip.range(0, 4)
let range5 = strip.range(0, 5)
let range6 = strip.range(0, 6)
let range7 = strip.range(0, 7)
let range8 = strip.range(0, 8)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance > 35) {
        range1.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance > 30) {
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance > 25) {
        range3.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance > 20) {
        range4.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance > 15) {
        range5.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance > 10) {
        range6.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance > 5) {
        range7.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance > 0) {
        range8.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
    	
    }
    strip.show()
    strip.clear()
})
