// VARIABLES
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."
let jobTitle = 'Graphic Designer'
let geoLocation = 'Toronto'
let annualSalary = '150,000'
let companyName = 'your own company'

let liEx1 = document.querySelector(`#ex1`)
liEx1.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}`


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.
var currentYear = 2020
var birthYear = 1996
let currentAge = currentYear - birthYear

let liEx2 = document.querySelector(`#ex2`)
liEx2.textContent =`They are ${currentAge} years old`

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var currentAge1 = 24
var maximumAge = 85
var snackPerDay = 5
let lifetimeSupply = (maximumAge - currentAge1) * snackPerDay

let liEx3 = document.querySelector(`#ex3`)
liEx3.textContent = `You will need ${lifetimeSupply}`

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
var radius = 7
let circumference = 2 * Math.PI * radius
let area = Math.PI * (radius * radius)

let liEx4 = document.querySelector(`#ex4`)
liEx4.textContent = `The circumference is ${circumference}. The area is ${area}.]`

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
var celsiusTemp = 35
let celsius2fahrenheit = celsiusTemp * (9/5) + 32
var fahrenheitTemp = 65
let fahrenheit2celsius = (fahrenheitTemp - 32) * (5/9)

let liEx5 = document.querySelector(`#ex5`)
liEx5.textContent = `${celsiusTemp}°C is ${celsius2fahrenheit}°F. ${fahrenheitTemp}°F is ${fahrenheit2celsius}°C`

// FUNCTIONS
// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num) {
    numSquared = num ** 2
    return numSquared
}

let liEx6 = document.querySelector(`#ex6`)
liEx6.textContent = `The result of squaring the number 5 is ${squareNumber(5)}.`

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(num) {
    numHalf = num / 2
    return numHalf
}

let liEx7 = document.querySelector(`#ex7`)
liEx7.textContent = `Half of 7 is ${halfNumber(7)}.`


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(num, den) {
    return num/den
}

let liEx8 = document.querySelector(`#ex8`)
liEx8.textContent = `25 is ${percentOf(3, 9) *100}% of 9.`

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircle(rad) {
    calculateArea = rad ** 2 * Math.PI
    return calculateArea
}

let liEx9 = document.querySelector(`#ex9`)
liEx9.textContent = `The area for a circle with radius of 10 is ${areaOfCircle(10)}`

// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
function runAll(num) {
    let resultHalf = halfNumber(num)
    let resultSquared = squareNumber(resultHalf)
    let resultArea = areaOfCircle(resultSquared)
    let resultPercent = percentOf(resultArea, resultSquared)
    return resultPercent
}

let liEx10 = document.querySelector(`#ex10`)
liEx10.textContent = `The final result is... ${runAll(4)*100}%`