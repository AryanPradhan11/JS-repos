function SetUsername(user) {
    this.user = user
    console.log("called")
}


function createUser(user, username, login) {
    SetUsername.call(this, user)

    this.username = username
    this.login = login
}

const values = new createUser('Aryan', "StepBro", true)
console.log(values)