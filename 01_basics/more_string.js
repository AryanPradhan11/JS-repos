//const name = new String('Aryan'); //object of name String
//console.log(name.__proto__);
//console.log(name.toUpperCase()); //converts to uppercase
//console.log(typeof name); //returns object
//console.log(name.substring(0, 4)); //starts at 0 index and ends at (4-1)th index


//const names = "Aryan"
//console.log(names.slice(-4, -1));

const email = "aryanpradhan773@gmail.com";
console.log(email)
console.log(email.trim()) //trims whitespaces 

const newProduct = "Machine"
console.log(newProduct.replace("Machi", "Aryan")); //replaces the required value

console.log(email.includes('%')); //checks if the value is available or not and returns in boolean

console.log(email.split('a')); //splits on basis of a

console.log(email.endsWith('m')) //checks if the value endswith the given para

console.log(email.concat('gg')) //use this to append the para on the existing value

console.log(email.charCodeAt(1)) //provides unicode for the provided index 

console.log(email.codePointAt(2)) //similar to charCodeAt
