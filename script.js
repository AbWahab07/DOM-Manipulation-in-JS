console.log( 'Hello World!!!' );

/**************************************************
 * Variables and Data Types
*/
/*
var firstName = 'Abdul';
var lastName = 'Wahab';
var age = 25;
var fullAge = false;
var job;

console.log( firstName ); // String - Abdul
console.log( lastName ); // String - Wahab
console.log( age ); // Number - 25
console.log( fullAge ); // Boolean - false
console.log( job ); // undefined
*/

// Rules and Convention for naming variables
/*
  variable name can't start with the digit.
  variable name can start with the letter, $ or _ only.
  use camelcase when multiple words in variable name.
  to name a variable you can't use JS reserved keywords like true, function, delete
*/

// Invalid declarations
/*
  var 3years = 3;
  var delete = 'delete';
*/

// JS has dynamic typing, means types are assigned to variable automatically. 



/**************************************************
 * Variable Mutation and Type Coercion
*/

/*
// Type Coercion
var firstName = 'Abdul';
var age = 25;

console.log( firstName + ' ' + age ); // Abdul 25
var job, isMarried;
console.log( firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried ); // Abdul is 25 years old undefined. Is he married? undefined
job = 'teacher';
isMarried = false;
console.log( firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried ); // Abdul is 25 years old teacher. Is he married? false
// Conclusion: Number, Boolean, Undefined are coerced into String


// Variable Mutation: refers to changing the value of a variable
age = 'twenty eight'; // dynamic typing
console.log( firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried );

var lastName = prompt( 'What is your last Name? ' );
console.log( firstName + ' ' + lastName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried ); // Abdul Wahab is twenty eight years old teacher. Is he married? false
*/



/**************************************************
 * Basic Operators
*/
// An operator is unary if it has a single operand. e.g unary negation ( single operand, reverses the sign)
// An operator is binary if it has two operands. e.g binary subtraction ( two operands, subtracts).

var currentYear, johnYear, markYear, johnAge, markAge;
currentYear = 2018;
johnAge = 28;
markAge = 33;

// Math Operators : +, -, /, *, %
johnYear = currentYear - johnAge;
markYear = currentYear - markAge;
console.log( johnYear ); // 1990
console.log( currentYear + 2 ); //2020
console.log( currentYear * 2 ); // 4036
console.log( currentYear / 10 ); // 201.8
console.log(  5 % 2  ); // 1 


// Logical Operator : >, <, >=, <=
var johnOlder = johnAge > markAge;
console.log( johnOlder ); // false


// typeof Operator
console.log( typeof johnYear ); // number
console.log( typeof 'Mark is 33' ); // string
console.log( typeof johnOlder ); // boolean
var x;
console.log( typeof x ); // undefined


// String concatenation, binary + : if the binary + is applied to strings, it merges ( concatenates) them:
let s = "my" + "string";
console.log( s ); // mystring


// Numeric conversion, unary + : The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything with numbers, but if the operand is not a number, then it is converted into it.
// Converts non-numbers
console.log(  +true  ); // 1
console.log(  +""  );   // 0
let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
// unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.
console.log(  +apples + +oranges  ); // 5
// the longer variant
// console.log(  Number( apples) + Number( oranges)  ); // 5


// Exponentiation ** : For a natural number b, the result of a ** b is a multiplied by itself b times.
console.log( 2 ** 2 ); // 4  (2 * 2)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
// The operator works for non-integer numbers of a and b as well, for instance:
console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

