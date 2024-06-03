const arr = [0, 1, 2, 3, 4]

arr.push(5) //adds value to the last index
arr.pop() //removes the value of the last index
arr.unshift(80) //adds the value to the 0th index
// console.log(arr)
// console.log(arr.indexOf(80))

// const newArr = arr.join() //returns in string
// console.log(newArr)

const myArr = ["A", 1]
const myn1 = myArr.slice(1, 3)
console.log(myArr)
console.log(myn1)

const myn2 = myArr.splice(1,3) //manipulates og array
console.log(myArr)
console.log(myn2)