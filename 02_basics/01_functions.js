function myName() {
    console.log("Aryan")
}

// myName

// function addNum(num1, num2) {
//     console.log(num1 + num2);
// }

function addNum(num1, num2) {
    return num1+num2
}

const result = addNum(3, 8)
// console.log("Result", result);


function loginUserMessage(username) {
    if(username) { //if the username is true
        return `${username} just logged in`
    } 
    else {
        console.log("Enter the username")
    }
}

console.log(loginUserMessage("Aryan"))