//This is a personal practice file for promise

const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Hello Aryan') //if resolve was moved after this line. Continuation at line 17:
        setTimeout(function() {
            console.log("You are ready")
            resolve()
        }, 1000)
    } ,1000)
    
})

// promise.then(() => {
//     console.log("Thy promise has been fulfilled")
// })
//The promise will be resolved and will print the first console, the .then console and second console

async function getResponse() {
    try {
        await promise //first await promise
        await new Promise(resolve => setTimeout(resolve, 1000)) //wait an additional 1 second
        console.log('The promise has been fulfilled') //This is console after 1 second
    } catch (error) {
        console.log('E: ', error)
    }
}

getResponse()