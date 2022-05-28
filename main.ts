input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 8 && input.temperature() < 30) {
        basic.showIcon(IconNames.Yes)
        basic.showString("T. Óptima")
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("Revisar Temperatura")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 100 && input.lightLevel() < 200) {
        basic.showIcon(IconNames.Yes)
        basic.showString("Nivel de Luz Optimo")
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("Revisar Nivel de Luz")
    }
})
