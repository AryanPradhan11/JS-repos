/**Immediately Invoked Function Expression */

function abc() {
    console.log("Normal functions")
}



(function iife() { //named iife
    // console.log("IIFE functions")
}) (); //second bracket for execution and first bracket wrapping function into parenthesis

(() => {
    // console.log("IIFE function for Arrow functions")
}) ();

//with paranthesis
((name) => { //parameter is name
    console.log(`Hello ${name}`)
})('Aryan'); //Aryan is the argument

(function name(names) {
    console.log(`Hello ${names}`)
})('gandu')

