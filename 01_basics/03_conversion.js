/**
 * Converting datatypes 
 */
let score = undefined;
let valueNumber = Number(score); /** Storing score (an string) to Number using, Number method */
/** But Number converts string like "nan", "abc" to int */

//console.log(typeof score)
//console.log(typeof valueNumber)
//console.log(valueNumber);

/**
 * Converting to Number
 * abc => NaN
 * true/false => 1/0
 * undefined = NaN
 * null = 0
 */


//isLoggedIn = undefined; /** empty string or 0=> false and anything else is true */
//let boolNum = Boolean(isLoggedIn)
//console.log(typeof boolNum);
//console.log(boolNum)

let num = undefined;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof num)