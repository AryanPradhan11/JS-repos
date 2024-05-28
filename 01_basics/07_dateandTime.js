// Dates

let date = new Date()
// console.log(date.toString()) //gives exact date
// console.log(date.toDateString())  //gives exact date 
// // console.log(date.toISOString())
// console.log(date.toLocaleDateString());
// console.log(typeof Date)


let myDate = new Date("2024, 1 , 25")
console.log(myDate.toDateString())

let timeStamp = Date.now() //millisecond value from default date
console.log(timeStamp)

let second = Math.floor(timeStamp/1000)
console.log(second)