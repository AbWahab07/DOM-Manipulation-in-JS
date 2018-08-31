console.log('Hello World!!!');

/**************************************************
 * 
 * Variables and Data Types
 * 
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
 * 
 * Variable Mutation and Type Coercion
 * 
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
 * 
 * Basic Operators
 * 
 */
// An operator is unary if it has a single operand. e.g unary negation ( single operand, reverses the sign)
// An operator is binary if it has two operands. e.g binary subtraction ( two operands, subtracts).
/*
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
*/



/**************************************************
 * 
 * Operator Precedence
 * 
 */
/*
var currentYear, johnYear, johnAge, markAge, fullAge;
currentYear = 2018;
johnYear = 1989;
fullAge = 18;
// Multiple Operators
var isFullAge = currentYear - johnYear >= fullAge;
console.log( isFullAge ); // true
// Math Operators
johnAge = currentYear-johnYear;
markAge = 35;
var avg = ( johnAge + markAge ) / 2; // () is a Grouping operator.
console.log( avg ); // 32
// Multiple Assignments
var x, y;
x = y = ( 3 + 5 ) * 4 - 6;
console.log(x, y); // 26
// Increment/Decrement Operator
console.log( x++ ); // 26
console.log( y-- ); // 26
console.log( x++ ); // 27
console.log( y-- ); // 25
// Modify-in-place Operator
x *= 2;
console.log(x); // 56
*/



/**************************************************
 * 
 * Coding Challenge 1
 * 
 */
/*
var johnMass, johnHeight, markMass, markHeight;
johnMass = 92; // kg
johnHeight = 1.95; // meters
markMass = 78;
markHeight = 1.69;

var markBMI = markMass / (markHeight ** 2); 
var johnBMI = johnMass / (johnHeight ** 2);

console.log(markBMI, johnBMI); // 27.309968138370508 24.194608809993426

var isMarkBMIHigh = markBMI > johnBMI;
console.log(isMarkBMIHigh); // true

console.log("Is Marks's BMI higher than John " + isMarkBMIHigh);
*/



/**************************************************
 * 
 * If/Else Statement
 * 
 */
/*
var firstName = 'John';
var maritalStatus = 'married';

if ( maritalStatus === 'married' ) {
  console.log( firstName + ' is married!');
}
else {
  console.log( firstName + ' will be married soon :)');
}
var isMarried = true;
if( isMarried ) {
  console.log( firstName + ' is married!');
}
else {
  console.log( firstName + ' will be married soon :)');
}
var johnMass, johnHeight, markMass, markHeight;
johnMass = 92; // kg
johnHeight = 1.95; // meters
markMass = 78;
markHeight = 1.69;

var markBMI = markMass / (markHeight ** 2); 
var johnBMI = johnMass / (johnHeight ** 2);
if ( markBMI > johnBMI )
  console.log("Marks's BMI is higher than John"); // Marks's BMI is higher than John
*/



/**************************************************
 * 
 * Boolean Logic
 * 
 */
/*
// Operators are &&, ||, !, 
var firstName = 'John';
var age = 30;
if ( age < 13 ) {
  console.log( firstName + ' is a boy.' );
} else if ( age >= 13 && age < 20 ) {
  console.log( firstName + ' is a teenage.' );
} else if ( age >= 20 && age < 30 ) {
  console.log( firstName + ' is a young man.' );
} else {
  console.log( firstName + ' is a man' );
}
*/



/**************************************************
 * 
 * Ternary Operator and Switch Statements
 * 
 */
/*
var firstName = 'John';
var age = 18;
age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice'); // For 14 -> John drinks juice
var drink = age >= 18 ? 'beer' : 'juice'; // For 18, beer
console.log(drink); // beer
/*
if ( age >= 18 )
  var drink = 'beer';
else
  var drink = 'juice';
console.log( drink );
*/
/*
var job = 'designer';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids');
    break;
  case 'driver':
    console.log(firstName + ' drives UBER');
    break;
  case 'designer':
    console.log(firstName + ' designs websites');
    break;
  default:
    console.log(firstName + ' does something else');
    break;
}
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenage.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log( firstName + ' is a man' );
    break;
}
*/



/**************************************************
 * 
 * Truthy and Falsy Values and Equality Operators
 * 
*/ 
// Falsy Values : undefined, null, '', 0, NaN
// Truthy Values : NOT falsy values
/*
var height;
height = 23; // Variable is not defined as 0 is a falsy value so fix the check
height || height === 0 ? console.log( 'Variable is defined' ) : console.log( 'Variable is NOT defined' );
height === '23' ? console.log( 'The == operator does type coercion' ) : console.log( 'The === is strict equality operator and does NOT do type coercion' );
*/



/**************************************************
 * 
 * Coding Challenge
 * 
*/
/*
var avgJohn, avgMike;
avgJohn = ( 89 + 120 + 103 ) / 3;
avgMike = ( 116 + 94 + 123 ) / 3;
/*
if ( avgJohn > avgMike )
  console.log( 'John team is winner with average ' + avgJohn);
else if ( avgMike > avgJohn )
  console.log( 'Mike team is winner with average ' + avgMike);
else
  console.log( 'Both teams have equal score so there is a draw', avgMike, avgJohn );
*/
/*
var avgMarry = ( 97 + 134 + 105 ) / 3;
console.log(avgMarry, avgMike, avgJohn );
if ( avgJohn > avgMike && avgJohn > avgMarry)
  console.log( 'John team is winner with average ' + avgJohn);
else if ( avgMike > avgJohn &&  avgMike > avgMarry )
  console.log( 'Mike team is winner with average ' + avgMike);
else if ( avgMarry > avgJohn &&  avgMarry > avgMike )
  console.log( 'Marry team is winner with average ' + avgMike);
else 
  console.log( 'All teams have equal score so there is a draw', avgMike, avgJohn, avgMarry );
*/



/**************************************************
 * 
 * Functions 
 * 
*/
/*
// Function Definition
function calculateAge ( birthYear ) {
  return 2018 - birthYear;
}
var johnAge = calculateAge(1990);
var mikeAge = calculateAge(1993); 
var janeAge = calculateAge(1992); 
console.log( johnAge, mikeAge, janeAge ); // 28 25 26

function yearsUntilRetire ( birthYear, firstName ) {
  var age = calculateAge( birthYear );
  var retirement = 65 - age;
  retirement > 0 ? console.log( firstName + ' will retire in ' + retirement + ' years' )
  :console.log( firstName + ' is already retired' );
}
yearsUntilRetire( 1954, 'Abdul' ); // Abdul will retire in 1 years
yearsUntilRetire( 1948, 'Mike' ); // Mike is already retired
yearsUntilRetire ( 1969, 'Jane' ); // Jane will retire in 16 years
*/



/**************************************************
 * 
 * Function Statement and Expression
 * 
*/
// Function declaration/statement : function whatDoYouDo ( job, firstName ) {}
// Function expression
var whatDoYouDo = function ( job, firstName ) {
  switch ( job ) {
    case 'teacher':
      return firstName + ' teaches code.'; 
    case 'driver':
      return firstName + ' drives uber.';
    case 'designer':
      return firstName + ' designs websites.';
    default:
      return firstName + ' does something else.';
  }
}  
console.log( whatDoYouDo( 'teacher', 'John' ) ); // John teaches code.
console.log( whatDoYouDo( 'driver', 'Mike' ) ); // Mike drives uber
console.log( whatDoYouDo( 'plumber', 'Jane' ) ); // Jane does something else.