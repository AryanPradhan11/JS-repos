// const promise = new Promise(function(resolve, reject) {
//     //Do an async tasks
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve() //connecting resolve with .then
//     }, 2000)
// })
// //then is connected with resolve
// promise.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Task 2 has been completed')
//         resolve()
//     }, 1000);
// }).then(function() {
//     console.log('Consumption of promise has been done')
// })


// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username: 'aryan', email: 'domain'}) //passing data as object
//     }, 1500)
// })

// promiseOne.then(function(user) {
//     console.log(user) //the parameter will gain the object
// })


// const promiseTwo = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false
//         if(!error) {
//             resolve({username: 'Aryan'})
//         } else {
//             reject('Syntax is wrong')
//         }
//     }, 4000)
// })

// promiseTwo
// .then((user) => {
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// })
// .catch(function(error) {
//     console.log(error)
// })
// .finally(() => console.log("The promise is fulfilled"))

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({language: 'JS'})
        } else {
            reject('JS syntax is wrong')
        }
    }, 2000)
})

async function consumePromiseThree() { //using async await as a replacement of then
    try {
        const response = await promiseThree
        console.log(response)
    } catch (error) {
        console.log("Errorhandled")
    }
}

consumePromiseThree()

async function getAlldata() {
    try {
        const response = await fetch('https://api.github.com/users/Maygodbless3u') //fetching my github data
        const data  = await response.json() //convert into json
        console.log(data) //print the data
    } catch (error) {
        console.log("E: ", error) //prints if the error is true
    }
}

getAlldata() 