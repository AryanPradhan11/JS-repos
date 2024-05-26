/**comparing dataypes */

//console.log(null == 0)
//console.log(null > 0)
//console.log(null < 0)

//console.log(undefined == 0)
//console.log(undefined > 0)
//console.log(undefined < 0)


/**=== */

//console.log("2" === 2) //strictly checks the dataypes, doesn't convert  datatypes auto
//console.log("2"==2) //converts the datatype and provides true
//console.log(null >= 0)

/**Primitive Datatype (call by value)
 * String,
 * Number,
 * Boolean,
 * null,
 * undefined,
 * symbol,
 * bigInt,
 * 
*/

/**Non primitive datatype 
 * Array,
 * Object,
 * Functions.
*/
/**
 * JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
 */

/**Primitive example */
const score = 30;
const scoreValue = 5.6;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId) //not equal

const bigNumber = 4n //n converts to bigInt
//console.log(typeof bigNumber)


/**Non primitive examples */

const heroes = ["A", "B", "c"];

let obj={
    name: "A",
    age: 1500,
}
/**is an object function but when used typeOf it returns function */
const finc = function() {
    console.log("Hello")
}


console.log(typeof outsideTemp)