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

// Additional Opertor taught in the Lopping section.

// !== : Strict Different from Operator. It is used to check the differnce between two value, whether they are different from each other or not. 

// != : Different Operator. It is also used to check the difference between two values, whether they are different from each other or not but it is slightly different from the strict different operator, It accepts both string and numeric value looking alike.

example shown in the Looping section.

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

//---Truthy / Falsy Values and Equality Operators---

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

//---------------------Functions--------------------

/*
//STNTAX: function <function name> (<function argument>){ <function body> }

function calAge (year){
    return 2019 - year;
}

var venkatAge = calAge(1999);
var shubhamAge = calAge(2000);
var vardhanAge = calAge(1947);
console.log(venkatAge, shubhamAge, vardhanAge);


function retirement (firstName, age){
    var timeLeft =  65 - age;
    if(timeLeft > 0){
        console.log(firstName + ' will retire in ' + timeLeft + ' years.');
    } else {
        console.log(firstName + ' is a retired guy!');
    }
}

retirement('Venkat', venkatAge);
retirement('Shubham', shubhamAge);
retirement('Vardhan', vardhanAge);
*/

//--------Function Expression and Statement---------

/*
//Function Declaration:
// function whatDoYouDo(job, firstName){ }

//Function Expression
// Def: Anything that we do which results in a value , the whole is treated as an expression.

var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'programmer':
            return firstName + ' is a fucking coder!';
        case 'rider':
            return firstName + ' is a bullet rider';
        case 'cop':
            return firstName + ' is a fucking cop!';
        default:
            return firstName + ' is in some professional not included!'
    }
}

console.log(whatDoYouDo('programmer', 'Venkat'));
console.log(whatDoYouDo('rider', 'Duniya'));
console.log(whatDoYouDo('cop', 'Shubham'));
console.log(whatDoYouDo('fishing', 'Siddu'));
console.log(whatDoYouDo('rider', 'Vardhan'));


//Statements:
//Def: Statements do some actions which executes but do not produce sudden results. example: IF/Else Statement, Looping statements, function declarations, etc
*/

//----------------------Arrays----------------------

/*
//INITIALIZATION OF AN ARRAYS:

var names = ['Venkat', 'Shubham', 'Vardhan', 'Siddu'];
var year = new Array(1999, 1998, 2000, 2001);

console.log(names);     //printing the entire array
console.log(names.length); //find the number of elements present in the Array
console.log(names[2]);  //printing the selected element in the array.

//MUTATING AN ARRAY:

names[3] = 'Duniya';    //Mutates an element at the selected Position of the Array.
names[names.length] = 'Aditi';  //Adds an element at the end of the Array.
console.log(names);

//SOME FUNCTIONS OF ARRAYS:

var venkat = ['Venkat', 'Raja', 1999, "Programmer", false];


venkat.push('Blue');   //PUSH method adds an element at the end of an Array.
venkat.unshift('Mr.'); //UNSHIFT method adds an element from the begining of an array.
console.log(venkat);

venkat.pop();   //POP method deletes an element from the end of an array.
venkat.shift();   //SHIFT method deletes an element from the begining of an array.
console.log(venkat);

console.log(venkat.indexOf(1999));  //INDEXOF method gives the position of the element in an array. NOTE: if the element whose index number is to be found is not there in that array then it will automatically result to -1.

console.log(venkat.indexOf('Venky'));

//TERNARY OPERATOR can be used in an array to find out whether that element is there in the array or not:

var isCop = venkat.indexOf('Cop') === -1 ? 'Element is not there in the Array' : 'Element Present';
console.log(isCop);

console.log(names);
names.pop();
console.log(names);
console.log(names.length);
*/

//---------------Object and Properties--------------

/*
//OBJECT LITERAL METHOD:
//syntax: var <object name> = { <object body> }

var venkat = {
    firstName: 'Venkat Raja',
    lastName: 'CH',
    birthYear: 1999,
    friends: ['Shubham', 'Siddhant', 'Vardhan', 'Duniya', 'Gadhi'],
    isMarried: false,
    job: 'Programmer'
}

console.log(venkat);

//Accessing Properties

console.log(venkat.firstName);
console.log(venkat['lastName']);
var z = 'birthYear';
console.log(venkat[z]);
var x = venkat['birthYear'];
console.log(x);

//Mutating Properties:

venkat.lastName = 'Chitreddy';
venkat['job'] = 'Senior Web Developer';
console.log(venkat);

//NEW OBJECT METHOD:

var venky = new Object();
venky.firstName = 'Venkat';
venky.lastName = 'Raja';
venky.job = 'Pilot';
venky.birthYear = 2000;
console.log(venky);
*/

//----------------Object and Methods----------------

/*
//this keyword is introduced.
//this is used as the keyword which selects the current object or the property.

var venkat = {
    firstName: 'Venkat Raja',
    lastName: 'CH',
    birthYear: 1999,
    friends: ['Shubham', 'Siddhant', 'Vardhan', 'Duniya', 'Gadhi'],
    isMarried: false,
    job: 'Programmer',
    calcAge: function (){
        this.age = 2019 - this.birthYear;
    }
}

console.log(venkat); //print before executing the function
venkat.calcAge(); //execution of the function
console.log(venkat);    //print after the execution of the function #age is added.

*/

//---------------Loops & Iteration------------------

/*
// For Loop:
//SYNTAX: for (initialization ; condition; increment/decrement){ <body> }

var venkat = ['Venkat', 'Raja', 1999, 'Programmer', false, 'blue'];

for (var i = 0; i < venkat.length; i++){
    console.log(venkat[i]);
}

// i and j are taken for the initialization and it is just a convention in JavaScript.


// While Loop:
//SYNTAX: <initialization>;
//          while(condition){ <body><increment/decrement> }

var j = 0;

while (j < venkat.length){
    console.log(venkat[j]);
    j++;
}

// CONTINUE and BREAK statement

//Continue: the continue keyword is used when you need to skip a certion condition during the iteration and move on to the next condition.

for(var k = 0; k < venkat.length; k++){
    if (typeof venkat[k] !== 'string') continue;
    console.log(venkat[k]);
}
//Break: the break keyword is used to break out (quit) of the situation. It will stop the loop and move out of it as soon as break gets executed.

var l = 0;

while(l < venkat.length){
    if(typeof venkat[l] !== 'string') break;
    console.log(venkat[l]);
    l++;
}

for (var m = 0; m < venkat.length; m++){
    console.log(typeof venkat[m]);
}
*/

