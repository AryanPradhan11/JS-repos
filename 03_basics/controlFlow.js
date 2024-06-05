//if

// if(2 === "2") {
//     console.log("This is true")
// }
// else {
//     console.log("This is false")
// }

// // === is strict check, checks even datatype.
// // == checks data, will convert the datatype if required

// // let condition = true //cond is true 

// // if (condition) { //no matter the condition, it is regarded as true
// //     console.log("True")
// // } else {
// //     console.log("False")
// // }




// //testing
// let score = 100
// if(score >= 100) {
//     //var power = 10 //using var will give access to power outside the if else statement
//     let power = 10 //using let will show the error on trying to access the power outside the statement.
//     console.log(`User Power: ${power}`)
// }

// console.log(`User Power: ${power}`)


let userLoggedIn = true
let active = true

if(userLoggedIn || active) {
    console.log("User available")
}