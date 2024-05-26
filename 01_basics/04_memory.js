/**Two types of memory
 * Stack (for primitive)
 * Heap (non primitive)
 */

/**Stack memory */
/**original is immutable, you are provided copy */
let user1 = 3;
user1 = 5
let user2 = user1
user2 = 4
console.log(user2)
console.log(user1)


/**Heap memory */
/** Provides references  */
let user = {
    username: "Aarju",
    email: "abc.com"
}


let user3 = user
user2.email = "xyz.com";

console.log(user)
console.log(user3)


