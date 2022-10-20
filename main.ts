input.onButtonPressed(Button.A, function () {
    OLED.init(128, 64)
    n += 1
    OLED.writeStringNewLine("n=" + n)
})
input.onButtonPressed(Button.AB, function () {
    OLED.init(128, 64)
    OLED.writeNumNewLine(1 / Math.sqrt(5) * (((Math.sqrt(5) + 1) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n))
    basic.pause(3000)
    n = 0
})
input.onButtonPressed(Button.B, function () {
    OLED.init(128, 64)
    n += -1
    OLED.writeStringNewLine("n=" + n)
})
let n = 0
OLED.init(128, 64)
n = 0
