// const user = {
//     name: 'Aryan',
//     age: '19',
//     subject: 'Computing',

//     getUserDetails: function() {
//         return `Username: ${this.name}` //unless used return it also logs undefined
//         // console.log(globalThis)
//     } 
// }

// console.log(user)
// console.log(user.getUserDetails())  //this returns Aryan 


// const date = new Date() //new is the constructor function

function user(username, loginCount) {
    this.username = username //this.your_variable = passed parameter
    this.loginCount = loginCount

    return this //the object is passed on
}

// const userOne = user('Aryan', 1)
// const userTwo = user('ABC', 11)
// console.log(userOne)
/**In this case, userTwo will overwrite the value on userOne */

const userOne = new user('Aryan', 1)
const userTwo = new user('ABC', 11)
console.log(userOne.constructor)
//using new will provide new instance of constructor all over
/**New creates empty onject
 * constructor function is called because of new, all the arguments you have provided are packed
 * this is injected with the arguments
 */