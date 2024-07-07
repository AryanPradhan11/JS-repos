class User {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logMe() {
        return `Username: ${this.username}`
        
    }

    createId() {
        return `123`
    }
}

const aryan = new User('ID', 'aryan123@gmail.com', '222200')
console.log(aryan.logMe())
