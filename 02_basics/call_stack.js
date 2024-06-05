/**JavaScript Execution Context */

//On executing js, it is dividing into 2 phases.

/**Global execution context
 * 
 * is kept on (this)
 * different EC on different environment
 */
let a = 10
let b = 5

function add(num1, num2) {
    total = num1+num2
    return total
}

let result1 = add(a, b)
let result2 = add(3, 5)

//Step 1 
//Global EC (this)

//Step 2 Creation Phase 
//a --> undefined
//b --> undefined
//add --> undefined
//result1 --> undefined
//result2 --> undefined
/**First cycle ends */

//Step 3 Exceution phase
//a <-- 10
//b <-- 5
//add --> creates its' won executional context 
    //new variable env + execution thread
    //will delete after completion
    //creates a sandbox for every function.
    //in this code 1 for add function and other for result2
        //starts with memory phase
        //moving to execution phase
        //num1 is 10, num2 is 5, total is 15
        //returns total to global EC
        
/** Function execution context 
 * 
*/


