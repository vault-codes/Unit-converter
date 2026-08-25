// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

let boxEl = document.getElementById("box1")

let buttonEL = document.getElementById("convertBtn")
const unitEl = document.getElementById("unit1-value")
const unit2El = document.getElementById("unit2-value")
const unit3El = document.getElementById("unit3-value")





function renderlength(num){
   
    let mToFT = (3.281 * num).toFixed(3)
    let ftToM =  (num / 3.281).toFixed(3)

    let result = `${num} meters = ${mToFT} feet |${num} feet = ${ftToM} meters` 
    return result

}

function renderVolume(num){
    let literesToG = (0.264 * num).toFixed(3)
    let Gallon = (num / 0.264).toFixed(3)

   let result = `${num} liters = ${literesToG} gallons | ${num} gallons = ${Gallon} liters`
   
   return result
}

function renderMass(num){
    let kgToPound = (2.204 * num).toFixed(3)
    let poundToGallon = (num/2.204).toFixed(3)

    let result = `${num} kilograms = ${kgToPound} pounds | ${num} pounds = ${poundToGallon} liters`
   
   return result

}


buttonEL.addEventListener("click", function(){
    let inputEl = document.getElementById("unit").value
    unitEl.textContent = renderlength(inputEl)
    unit2El.textContent = renderVolume(inputEl)
    unit3El.textContent = renderMass(inputEl)


    

})






