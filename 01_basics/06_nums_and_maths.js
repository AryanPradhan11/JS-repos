const balance = new Number(15000)
//console.log(balance.toFixed(2)) //gives 2 '0' values after decimal point

const amt = 23.68756
// console.log(amt.toPrecision(2)) //increments up the number by 1 on the provided (n-1) index and doesn't return value after the number

const hundreds = 1123456
// console.log(hundreds.toLocaleString())//on default returns the number in proper commas using en number method.
// console.log(hundreds.toLocaleString("en-IN")); //uses commas in non english method

/** ++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/**
 * Maths library is by default
 */

// console.log(Math)
// console.log(Math.abs(-4)) //neg values into pos value
// console.log(Math.round(10.3)) //rounds up number
// console.log(Math.ceil(4.1)) //rounds up only top returns 5
// console.log(Math.floor(4.9)) //rounds to only down returns 4
// console.log(Math.sqrt(5)) //gives the sqr root value of the given number

// console.log(Math.random()) //on default gives value from 0 to 1

// /**To get the random value of required values */
// console.log(Math.random()*10)

//on case of getting number like 0.0n we use
// console.log(Math.floor(Math.random() * 10) + 1)

const min= 10
const max = 15

console.log(Math.floor(Math.random() * (max- min + 1)) + min) //gives random value from max and min
