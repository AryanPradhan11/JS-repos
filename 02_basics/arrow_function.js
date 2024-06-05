/**THIS and arrow function */
//hoisting
// console.log(addOne(6))
function addOne(num) {
    return num + 1
}

// console.log(typeof addOne)

// console.log(addTwo(7)) //cannot hoist since it is also an expression inside a variable
const addTwo = function(num1) {
    return num1 + 2
}

// console.log(typeof addTwo)


 const user = {
     name: "Aryan",
     price: 18000,

     welcomeMessage: function() {
         console.log(`Welcome to website, ${this.name}`) //this refers to the user which will provide name property
         console.log(this) //since this will refer the user hence it will log the entire user
     }
 }

// console.log(user.welcomeMessage()) //The welcomeMessage method does not have a return statement, so it implicitly returns undefined.

// user.welcomeMessage() //in this case the return value is not being logged or used anywhere in this case, it does not appear in the console output.

// user.name = "A" //will alter the name

// user.welcomeMessage()


function a() {
    let name = "AAAA"
    console.log(this)
    console.log(this.name) //won't work on functions
}

// a()

// console.log(typeof this)

/**Arrow functions */

const arrowFunc = () => {
    let username = "Aryan"
    console.log(`This is an arrow functions, Hello ${username}`) //using this will result to undefined
}

// arrowFunc()

/**Some other examples for arrow functions */

const addNums = (num1, num2) => {
    return num1 + num2
}

// console.log(addNums(3, 5)) //output 8
// console.log(addNums(3, 5, 9)) //will ignore the third argument

/**Some other experiments */

const nums = (number1, ...number2) => { //(number1 is a regular parameter), (...number2 collects the remaining parameter)
    return number1 + number2
}

console.log(nums(3, 9)) //in this case number1 is 3, number2 is [9], which is 3 + "9" due to array string conversion, results into 39

console.log(nums(3, 9, 5, 10)) //similar case number1 is 3, number2 is [9, 5, 10] which is 3+ "9,5,10", resulting into 39,5,10


const addtwo = (a,b) => (
    a + b
) //keeping it inside curly braces means return statement is compulsary, but by keeping it like this () return is not necessary
console.log( addtwo(1, 2)) //output 3
//but the small bracket only works as a block in the arrow functions