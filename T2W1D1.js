//                                                                  --- DAY ONE ---

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
console.log(`My name is `  + myName + ' ' + lastName);
// console.log('My name is Neil Hanson);

function add(n1, n2) {
    return n1 + n2;
}
let result = add(5, 7);
// let result = 12;

console.log(add(1, 3));

// Ternary: If/else, and resolves to a value
let height = 55;
let message = height > 50 ? 'You can ride thi ride' : 'Keep growing, try later' // If : else
// let message = 'you can ride this ride';

function stressRelease() {
    console.log('Yaaaaaaaaaaa');
}

// Declaring a function
function makeASentence(words) {
    return words.join(' ') + '.';
}

// one liner version of the function apove^
let makeASentence5 = words => words.join(' ') + '.';

// Calling a function
let welcome = makeASentence(['Welcome', 'to', 'Gaiman']);
// 'Welcome to Gaiman.'  

function theDivider( num1, num2) {
    num1 / num2;
}

console.log(theDivider(4, '2', 6));



