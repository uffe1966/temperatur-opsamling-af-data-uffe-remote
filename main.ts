let Temperatur = 0
basic.showString("Remote")
radio.setGroup(55)
basic.forever(function () {
    Temperatur = input.temperature()
    radio.sendNumber(Temperatur)
    basic.showNumber(Temperatur)
    basic.pause(2000)
})
