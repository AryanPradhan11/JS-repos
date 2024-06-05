//For loops
const array = [0, 1, 2, 3, 4, 5]
const element = 0
for (let i = 0; i < array.length; i++) {
    element += array[i];
    return element
}
console.log(`The sum of the array is ${element}`)
