input.onPinPressed(TouchPin.P0, function () {
    Minutes = 0
    Seconds = 0
})
input.onButtonPressed(Button.A, function () {
    Minutes += 1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(Seconds)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Seconds += 1
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(Minutes)
})
let Seconds = 0
let Minutes = 0
basic.showIcon(IconNames.Happy)
basic.showString("HELLO ")
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showArrow(ArrowNames.West)
basic.showString("Press A to set minutes ")
basic.showLeds(`
    . # # # .
    . # . . #
    . # # # .
    . # . . #
    . # # # .
    `)
basic.showArrow(ArrowNames.East)
basic.showString("Press B to set second ")
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `)
basic.showNumber(Minutes)
basic.showNumber(Seconds)
