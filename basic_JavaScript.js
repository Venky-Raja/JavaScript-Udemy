//-------------Hello World!-------------------------

/*
//console.log('Hello World !!!');
*/

//-----------Data Types and Variables---------------

/*
var firstName = 'Venkat Raja';
var lastName = 'CH';

var age = 20;

var bool = true;

var valid;

console.log(firstName);
console.log(lastName);

console.log(age);

console.log(bool);

console.log(valid);

valid = 'Yes We Can';

console.log(valid);
*/

//--------- Data Mautation & Type Coesion ----------

/*
// Type Coersion

var firstName = 'Venkat Raja';
var lastName = 'CH';
var age = 20;

var job = 'student';

var status = true;

console.log(firstName + '  ' + lastName + '  is ' + age + 'years old who is a ' + job + ' and the description about him is ' + status);


// Variable Mutation


job = 'Programmer';

alert('Hey! this is '+ firstName + '  ' + lastName + ' and I am a great ' + job + '. Press OK button.');

lastName = prompt("What's your new last name?");

alert('Hey I have now changed my last name and now my full name is ' + firstName + '  ' + lastName);

*/

//-------------------Operators----------------------

/*

// Basic Operators

// Math Operator

var year = 2019;
var venkatAge = 20;
var shubhamAge = 21;

console.log (year - venkatAge);
console.log (year * venkatAge);
console.log (year + year);
console.log (year/10);

// Logical Operator


var compare = venkatAge >shubhamAge;
console.log (compare);

// typeof Operator

console.log (typeof compare);
console.log (typeof 'Yes We Can! we are comparing');
console.log (typeof year);
console.log (typeof venkatAge);

var z;
console.log (typeof x);

*/

//------------ Operators Precedence ----------------

/*
//multiple operators

var now = 2019;
var venkatYear = 1999;
var fullAge = 18;

var check = now - venkatYear >= fullAge;
console.log(check);

//grouping

var venkatAge = now - venkatYear;
var shubhamAge = now - 2000;

var averageAge = (shubhamAge + venkatAge) / 2;
console.log(averageAge);

//multiple assignments

var x , y;

x = 12 + 15 * 23 - (1 + 9 / 5);
console.log(x);

//moreoperators

x++;
console.log(x);
x*= 2;
console.log(x);
*/

//------------- If/Else statements -----------------

/*
var firstName = 'Venkat';
var martialStatus = 'single';

if(martialStatus === 'single'){
    console.log('Venkat \'s martial status is single ');
} else {
        console.log('Venkat is married.');
                }

var isMarried = true;
if(isMarried){
    console.log('Direct true value of boolean is passed in the if condition');
} else {
    console.log('Direct false value boolean is passed in the if condition');
}

//-----
var johnMass = 92;
var johnHeight = 1.95;

var johnBMI = johnMass / (johnHeight ** 2);

var markMass = 78;
var markHeight = 1.69;

var markBMI = markMass / (markHeight ** 2);

console.log ("Marks BMI is " + markBMI + "John's BMI is " + johnBMI);

if(markBMI < johnBMI){
   console.log ("Mark's BMI is less than that of John's"); 
} else {
    console.log ("John's BMI is less than that of Mark's ");
}
*/

//----------------Boolean Logic---------------------

/*

// Boolean operators:
//  && : Boolean 'AND' Operator, Both conditions should be true to execute.
//  || : Boolean 'OR' Operator, Either of the condition could be true to execute.
//  !  : Boolean 'NOT' Operstor. Simply reverts the operation, if true it converts in false, if false than converts into true.


var firstName = 'Venkat';
var age = 20;

if( age <= 12){
    console.log(firstName + ' is a boy.');
} else if ( age > 12 && age <= 19) {
    console.log(firstName + ' is a teenager.');
} else if ( age > 19 && age <= 30){
    console.log(firstName + ' is an Young man.');
} else {
    console.log(firstName + ' is a Man.');
}
*/


//----The Ternary Operator and Switch Statement-----

/*
// TERNARY OPERATOR:
// SYNTAX: <condition part> ? <TRUE Part> : <Else Part>

var venkatAge = 20;
var ShubhamAge = 21;
var age = 13;

venkatAge < ShubhamAge ? console.log('Shubham\'s Age is greater than that of Venkat') : console.log('Venkat\'s age is greater than that of Shubham\'s');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


//SWITCH STATEMENTS:


var firstName = 'Venkat';
var job = 'teacher';

switch('driver'){
    case 'teacher':
        console.log(firstName + ' teaches kids');
        break;
    case 'driver':
        console.log(firstName + ' drives Uber in Poland');
        break;
    case 'cop':
        console.log(firstName + ' is a Cop!');
        break;
    default :
        console.log(firstName + ' does something else');
}

var firstName = 'Venkat';
var age = 20;

switch(true){
    case age <= 12:
        console.log(irstName + ' is a boy.');
        break;
    case age > 12 && age <= 19:
         console.log(firstName + ' is a teenager.');
        break;
    case age > 19 && age <= 30:
         console.log(firstName + ' is an Young man.');
        break;
    default :
         console.log(firstName + ' is a Man.');
}
*/

//--Truthy and Falsy Values and Equality Operators--

/*
//TRUTHY AND FALSY VALUES:


//Falsy Value : undefined, null, 0, '' (an empty string), and NaN (Not a Number) are the values which are automatically evaluated as a false one in a if/else conditions.
//Truthy Value: All the ones except the Falsy Values.

var height

height = 0;

if(height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Varibale is not defined');
}


//Difference Between '==' and '===' [EQUALITY OPERATORS]:

// '===' is strict equality operator and gets true only if every value in both sides have equal value as well as equal type.

//'==' is a equalty operator which gets true if the values are equal, unaffected by a string or a number, it does type coersion.for example: 23 (number) and '23' (string) both value will work in the == equality operator.

height = '23';
if(height == 23){
    console.log("== does the type coersion.");
}

if(height === 23){
    console.log("=== does the type coersion.");
} else {
    console.log("=== do not do the type coersion.");
}
*/

