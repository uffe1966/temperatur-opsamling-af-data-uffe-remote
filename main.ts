input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
    basic.pause(2000)
})
let Temperatur = 0
basic.showString("Remote")
radio.setGroup(55)
basic.forever(function () {
    Temperatur = input.temperature()
    basic.showNumber(Temperatur)
    radio.sendNumber(Temperatur)
    basic.pause(2000)
})
