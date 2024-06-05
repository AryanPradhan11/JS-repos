// const email = "abc.gmail", string is assumed
const email = "" //string is null, null is falsy value

// if(email) {
//     console.log("Email available")
// } else {
//     console.log("No email")
// }

//falsy values
//false, 0n, "", null, undefined, 0, -0, BigInt, NaN

//truthy values
//true, "0", "false", [], {}, function() {}, " "


// const emptyObj = {} //empty object

// if(Object.keys(emptyObj)) {
//     console.log("Empty Object")
// }

//Nullish Coaelish Operator (??)

let val1
val1 = undefined ?? 10
console.log(val1)

//Ternary Operator
const price = 100
// condition ? true: false

price > 100 ? console.log(true) : console.log(false)


const name = '' ?? 10
console.log(name)