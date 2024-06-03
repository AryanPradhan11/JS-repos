/**Continuation of function */
//case1
// function calcCartPrice(...num1) { //using spread
//     return num1
// }

// console.log(calcCartPrice(90, 300, 500))

//the array will keep on appending the numbers on the argument


//case 2
// function calcCartPrice(val1, val2, ...num2) {
//     return val1, val2, num2
// }

// console.log(calcCartPrice(30, 50, 60)) //will return from 60 (same point), but won't return val1 and val2


const user = {
    name: "Aryan",
    price: 199
}

function username(custompara) {
    console.log(`Username is ${custompara.name}, and the price is ${custompara.price}`)
}

// username(user)

// username({ //can pass the object itself
//     name: "Sam",
//     price: 18
// })


const myArray  = [10, 20, 30, 40] //creating random array

function valuereturn(getArray) { //passing the getArray as the para
    return getArray[1] //returns second value
}

// console.log(valuereturn(myArray)) //myArray replaces the para as getArray