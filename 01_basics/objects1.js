/**This is for objects  */

//singleton

//object literals
const mySym = Symbol("key1")
const obj1 = {
    name: "Aryan",
    [mySym]: "key1",
    age: 19,
    isLoggedIn: false
} //object

/** 
 * On default, the keys are treated as string, above mySym also is treated as String rather than Symbol. Put mySym between the [] and console log it to see the difference
 */

//2 ways to access the values in the key
// console.log(obj1[mySym])
// console.log(typeof mySym)
// console.log(obj1["name"])

Object.freeze(obj1) //cannot mutate
obj1.name = "JSON"
console.log(obj1)