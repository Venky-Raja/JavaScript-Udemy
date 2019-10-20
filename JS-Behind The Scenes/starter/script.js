//////////////////////////////////////////

//CREATION PHASE: STEP: 1 : HOISTING

//Hoisting in Functions: [NOTE: Hoisting can work only in function declarations, it would not work in function expressions.]

calcAge(1998); //working hoisting in function declaration.

function calcAge (year){
    console.log(2019 - year);
}

calcAge(1999);


//retirement(1999); //Does not work as hoisting works only in function declaration and not in fucntion expressions, so it tends to show an error.

var retirement = function(year){
    console.log(65 - (2019 - year));
}

retirement(1999); //Works when in code line after the function is been declared.


//Hoisting in Variables : Hoisting works in variables, the difference comes between variable and function hoisting is that it defines all the elements of the function before its actully defined and results out but in variables it sets it to 'undefined'.

console.log(age); //variable hoisting sets it to undefined.

var age = 19;

console.log(age); 

//GLobal and Local Execution Variable:

var avg = 23;
Local();        //function hoisting

function Local(){
    console.log(avg); //variable hoisting sets it to undefined.
    var avg = 24;
    console.log(avg); // local variable so only works in the this current function.
}


console.log(avg);

//biggest advantage of hoisting is in using the function declaration even before defining the entire function.


///////////////////////////////////////

//CREATION PHASE: STEP: 2 : CREATION OF SCOPING CHAIN


// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calcAge(1999);

function calcAge (year){
    console.log(2019 - year);
    console.log(this);
}


var venkat = {
    name: 'Venkat Raja',
    birthYear: 1999,
    age : function(){
    console.log(2019 - this.birthYear);
    console.log(this);
        
    function abc(){
        console.log(this);
    }
        abc();
    }
}

venkat.age();

var shubham = {
    name: 'Shubham',
    birthYear: 2000
}

shubham.age = venkat.age;   //Method borrowing, the elements of the object venkat is borrowed and used by the object shubham.
shubham.age();



