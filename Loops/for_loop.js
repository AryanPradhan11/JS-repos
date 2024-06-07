//For loops
// const array = [0, 1, 2, 3, 4, 5]
// let element = 0
// for (let i = 0; i < array.length; i++) {
//     element += array[i];
// }
// console.log(`The sum of the array is ${element}`)

for (let i = 1; i < 10; i++) {
    console.log(`Outer Loop is ${i}`);
    for(let j = 1; j<5; j++) {
        console.log(i + '*' + j + '=' + i*j)
    }
}
