const button = document.querySelector("button")
const inputX = document.getElementById("X")
const inputY = document.getElementById("Y")

const pResultado = document.getElementById("resultado")

button.addEventListener('click',() =>{
    let valueX = Number(inputX.value)
    let valueY = Number(inputY.value)

    if (valueX == 0) {
        if (valueY == 0) {
            pResultado.textContent = "Origem"
            return
        } else {
            pResultado.textContent = "Eixo Y"
            return
        }
    } else if (valueY == 0) {
        pResultado.textContent = "Eixo X"
        return
    }

    if (valueX < 0) {
        if (valueY < 0) {
            pResultado.textContent = "Q3"
        } else {
            pResultado.textContent = "Q1"
        }
    } else {
        if (valueY < 0) {
            pResultado.textContent = "Q4"
        } else {
            pResultado.textContent = "Q2"
        }
    }
})