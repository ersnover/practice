const inputs = document.querySelectorAll(".sliderBar input")
const root = document.documentElement

function updateVar() {
    let varName = this.name
    let newVal = this.value

    if (varName == "color") {
        root.style.setProperty(`--${varName}`,`${newVal}`)
    } else {
        root.style.setProperty(`--${varName}`,`${newVal}px`)
    }
}

inputs.forEach(input => input.addEventListener('change',updateVar))
inputs.forEach(input => input.addEventListener('mousemove', updateVar))