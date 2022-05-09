console.log('hello');

let myName = 'Neil';
// END global var 'myName'
console.log(`my name is ${myName}`);
// 


/*
let --- a keyword, we are about to delare a variable

myName --- the name of the variable

= --- the assignement operator 

'Neil' --- the value
*/


// Use camelCase!!!!!
let lastName = 'Hanson';

// Other kinds of casing:

// snake_case
//let my_last_name = 'Hanson';

// SCREAMING_SNAKE_CASE
// MY_LAST_NAME = 'Hanson';

// kebob-case
//let my-last-name = 'Hanson';


/*
* Expressions
*
* Some code the evaluates to a single value
*/

//              an expression
console.log(`My name is`  + myName + ' ' + lastName);
// console.log('My name is Neil Hanson);

function add(n1, n2) {
    return n1 + n2;
}
let result = add(5, 7);
// let result = 12;
