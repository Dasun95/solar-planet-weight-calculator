const massWeight = {
    'Mercury'	:0.38,
    'Venus'	:0.91,
    'Earth'	:1,
    'Moon'	:0.166,
    'Mars'	:0.38,
    'Jupiter'	:2.34,
    'Saturn'	:1.06,
    'Uranus'	:0.92,
    'Neptune'	:1.19,
    'Pluto'	:0.06
}

let planet = document.querySelector('select')

for (const item of Object.keys(massWeight)) {
    let option = document.createElement('option')
    option.value = massWeight[item]
    option.textContent = item
    planet.appendChild(option)
}


const input = document.querySelector('input')
const button = document.querySelector('button')
let weight;

button.addEventListener('click', (e) => {
    
    let massInput = input.value
    let description = document.querySelector('.description')
    description.textContent = ''

    let selectedOption = document.querySelector('select')
    let selectedOptionText = selectedOption.options[selectedOption.selectedIndex].text
    let imageAddress = `./images/${selectedOptionText.toLowerCase()}.png`

    if (Number(massInput) && Number(massInput) > 0 && planet.value != 'none'){
        weight = planet.value * parseFloat(massInput) * 9.81
        description.textContent = `Your weight in ${selectedOptionText} is ${weight.toFixed(2)}N`
        document.querySelector('.planet-image').src = imageAddress
    } else {
        if (!(Number(massInput) && Number(massInput) > 0)) {
            description.textContent = 'Valid Mass in kg is required'
        } else {
            description.textContent = 'Please select planet'
        }
        
    }
})
