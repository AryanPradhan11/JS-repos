// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }


// const name = new user('Aryan', '773@email,com', '123')
// console.log(name.encryptPassword())
// console.log(name.changeUsername())

//behind the scene

function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

user.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}
const name = new user('Aryan', 'anana', '123456')
console.log(name.encryptPassword())
console.log(name.changeUsername())