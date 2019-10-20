alert('you must enter the mass in Kilogram unit and Height in meters');

var johnMass = prompt('John enter you mass');
var johnHeight = prompt('John enter your height');

var johnBMI = johnMass / (johnHeight ** 2);

var markMass = prompt('Mark enter your mass');
var markHeight = prompt('Mark enter your height');

var markBMI = markMass / (markHeight ** 2);

var markHigerBMI = markBMI > johnBMI;


console.log ('John\'s BMI = ' + johnBMI + ' \n Mark\'s BMI = ' + markBMI);
console.log ("Is Mark's BMI higher than John's? Is that true? The answer is " + markHigerBMI);