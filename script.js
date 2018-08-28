console.log('Hello World!!!');

/**************************************************
* Variables and Data Types
*/
/*
var firstName = 'Abdul';
var lastName = 'Wahab';
var age = 25;
var fullAge = false;
var job;

console.log(firstName); // String - Abdul
console.log(lastName); // String - Wahab
console.log(age); // Number - 25
console.log(fullAge); // Boolean - false
console.log(job); // undefined
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
// Type Coercion
var firstName = 'Abdul';
var age = 25;

console.log(firstName + ' ' + age); // Abdul 25
var job, isMarried;
console.log(firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried); // Abdul is 25 years old undefined. Is he married? undefined
job = 'teacher';
isMarried = false;
console.log(firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried); // Abdul is 25 years old teacher. Is he married? false
// Conclusion: Number, Boolean, Undefined are coerced into String


// Variable Mutation: refers to changing the value of a variable
age = 'twenty eight'; // dynamic typing
alert(firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is your last Name? ');
console.log(firstName + ' ' + lastName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried); // Abdul Wahab is twenty eight years old teacher. Is he married? false