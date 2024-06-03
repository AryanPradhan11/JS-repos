//continuation of objects

const tinder = {} //empty ibject

tinder.id = "1A"
tinder.name = "Aryan"
tinder.isLoggedIn = false

const user = {
    email: "aryanpradhan773@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Aryan",
            lastName: "Pradhan"
        }
    }
}

// console.log(user.fullname.userfullname.firstName);

const object1 = {1: "a", 2: "b"}
const object2 = {3: "c", 4: "d"}

// const object3 = {object1, object2}
// const object3 = Object.assign({}, object1, object2) //assigns the objects to one object, on this case, I have created an empty obj to store all the object to.
const object3 = {...object1, ...object2}
// console.log(object3)

const users = [ 
    {
        id: 1,
        name: "Aryan"
    }
]


console.log(Object.keys(tinder)) //gathers key in an array
console.log(Object.values(tinder)) //gathers values in an array
console.log(Object.entries(tinder)) //gathers key and values inside a mini array

console.log(tinder.hasOwnProperty('isLoggedIn'))