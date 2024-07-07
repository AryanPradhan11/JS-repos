class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log( `Username is: ${this.username}` )
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
        
    }

    addCourse() {
        console.log(`New course was added by: ${this.username}`)
    }
}

const course = new Teacher('Aryan', 'teacher@gmail.com', '123')
course.addCourse()
course.logMe()
const instance = new user('Aryan sir')
instance.logMe()
console.log(course === Teacher)