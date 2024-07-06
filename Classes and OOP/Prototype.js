let colors = "red      "
console.log(colors.trueLength)


let color = ['blue', 'red']
// console.log(color.length)

let building = {
    color: 'red',
    type: 'cottage',

    getmyHouse: function() {
        return (`Building: ${this.type}`)
    }
}

console.log(building.getmyHouse())

//creating a method available to all the prototypes called 'Aryan'. This method logs a new message
Object.prototype.Aryan = function() {
    console.log(`Present in all Objects`)
}

Array.prototype.Power = function() {
    console.log('Injecting methods in Array')
}
building.Aryan() //logs present in all objects
color.Aryan() //logs the same as above
building.Power() //the method is injected to Array hence it shows error
color.Power()//color is an array, hence logs injecting in array

/**Below is inheritance */


const teacher = {
    makeVideo: true
}

const teachingSupport = {
    available: false
}

const user = {
    name: 'jon',
    email: 'doggy@email'
}

const TASupport = {
    makeAssignment: 'JS Assignments',
    fullTime: true,
    __proto__: teachingSupport //borrowing all the attributes and elements of teachingSupport
}

