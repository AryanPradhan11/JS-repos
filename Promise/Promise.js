//This is a personal practice file for promise

const promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Hello')
        resolve()
    }, 1000)
})

promise
.then(function(){
    console.log('Your promise has been fulfilled')
})
.then(function(){
    console.log('Task 2 accomplished')
})
.catch(function() {
    console.log('Error')
})