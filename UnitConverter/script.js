const inputEl = document.getElementById("number-el")
const convertBtn = document.getElementById("convert-el")

const lengthContainer = document.getElementById("length-container")
const volumeContainer = document.getElementById("volume-container")
const massContainer = document.getElementById("mass-container")

convertBtn.addEventListener("click", function () {
    const value = Number(inputEl.value)

    if (!value && value !== 0) {
        alert("Please enter a valid number")
        return
    }

    // Conversion constants
    const meterToFeet = 3.281
    const literToGallon = 0.264
    const kiloToPound = 2.204

    const metersToFeet = (value * meterToFeet).toFixed(3)
    const feetToMeters = (value / meterToFeet).toFixed(3)

    lengthContainer.innerHTML = `
        <h3>Length (Meter/Feet)</h3>
        <p>${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters</p>
    `

    // VOLUME
    const litersToGallons = (value * literToGallon).toFixed(3)
    const gallonsToLiters = (value / literToGallon).toFixed(3)

    volumeContainer.innerHTML = `
        <h3>Volume (Liters/Gallons)</h3>
        <p>${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters</p>
    `

    // MASS
    const kilosToPounds = (value * kiloToPound).toFixed(3)
    const poundsToKilos = (value / kiloToPound).toFixed(3)

    massContainer.innerHTML = `
        <h3>Mass (Kilograms/Pounds)</h3>
        <p>${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos</p>
    `
})