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
/*
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
*/



/**************************************************
 * 
 * Arrays
 * 
*/
/*
// Arrays are zero indexed/based
// Initialize Array
var names = ['John', 'Marry', 'Jane'];
var years = new Array(1990, 1989, 1995);
console.log(names.length); // 3
console.log(names[1]); // Marry
// Mutate data in Array
names[1] = 'Abdul';
names[names.length] = 'Mark';
console.log(names); // John, Abdul, Jane, Mark
names[6] = 'Marry'; 
console.log(names); // ["John", "Abdul", "Jane", "Mark", empty × 2, "Marry"]
// Different Data Types 
var john = ['John', 'Smith', 1990, 'teacher', false];
// Array Methods

// Add an element
john.push('blue'); // adds in the end
john.unshift('Mr.'); // adds in the start
console.log(john); // ["Mr.", "John", "Smith", 1990, "teacher", false, "blue"]
// Remove an element
john.pop(); // removes from the end
john.shift(); // removes from the start
console.log(john); // ["John", "Smith", 1990, "teacher", false]

// indexOf will return the position of element in the array
console.log(john.indexOf(23)); // -1. It is used to test whether an element is present in the array or not 
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner); // John is NOT a designer
*/



/**************************************************
 * 
 * Coding Challenge 
 * 
*/
/*
var tipsArray = [], totalBillPaid = [];
var tip;
function calculateTip (bill) {
  if ( bill < 50 )
    return tip = bill / 100 * 20;
  else if( bill >= 50 && bill <= 200 )
    return tip = bill / 100 * 15;
  else 
    return tip = bill / 100 * 10;
}
tipsArray [0] = calculateTip(124);
tipsArray [1] = calculateTip(48);
tipsArray [2] = calculateTip(268);
console.log( tipsArray );
totalBillPaid [0] = 124 + tipsArray[0];
totalBillPaid [1] = 48 + tipsArray[1];
totalBillPaid [2] = 268 + tipsArray[2];
console.log( totalBillPaid );
*/



/**************************************************
 * 
 * Objects and Properties
 * We can access a particular value using name/key which is not possible in Arrays as array is index based. 
 * Order doesn't matters in Objects because we access a vlue using the key not an index whereas in Arrays order matters. 
*/
 // Object Literal Syntax
 /*
 var john = {
  name: 'John',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false
 };
console.log( john.name ); //John -  DOT Notation
console.log( john['job'] ); // teacher -  Bracket Notation 
var x = 'birthYear';
console.log( john[x] );
// Object Mutation : Changing the value refers to mutation 
john['job'] = 'driver';
john.birthYear = 1992;
console.log(john);

// new Object Syntax
var jane = new Object();
jane.name = 'Jane';
// jane[job] = 'designer'; error
jane['job'] = 'designer';
console.log(jane);
*/



/**************************************************
 * 
 * Objects and Methods
 * Object has a special keyword 'this' which points to itself.
 * 
*/
/*
var john = {
  name: 'John',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  }
 };
john.calcAge();
console.log(john.age);
*/



/**************************************************
 * 
 * Coding Challenge 
 * 
*/
/*
var mark = {
  name: 'Mark',
  mass: 90,
  height: 1.69,
  calcBMI: function () {
    this.BMI = (this.mass / (this.height * this.height) );
    return this.BMI; 
  }
};
var john = {
  name: 'John',
  mass: 80,
  height: 1.69,
  calcBMI: function () {
    this.BMI = (this.mass / (this.height * this.height) );
    return this.BMI; 
  }
};
mark.calcBMI();
john.calcBMI();
if (john.calcBMI() === mark.calcBMI()) 
  console.log('Both Mark and John have same BMI');
else
  john.BMI > mark.BMI ? console.log(`John ${john.BMI}`) : console.log(`Mark ${mark.BMI}`);
*/



/**************************************************
 * 
 * Loops and Iteration
 * 
 * 
*/
/*
for (let i = 0; i < 20; i++) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (let i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While Loop 
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// break and continue statements
var john = ['John', 'Smith', 1990, 'designer', false];
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// Looping backwards
for (let i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/



/**************************************************
 * 
 * Code Challenge 5
 * 
 * 
*/



/**************************************************
 * 
 * JS versions
 * 
 * 
*/