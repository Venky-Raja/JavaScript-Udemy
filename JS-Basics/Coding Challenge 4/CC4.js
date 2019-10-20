//John's height: 1.8m & mass: 80kgs.
//Mark's height: 2m & mass: 70Kgs.

var john ={
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI:  function (){
    this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
}
}

var mark ={
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function (){
    this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
}
}

console.log(john);
console.log(mark);


if (john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + " has more BMI than Mark and his BMI is " + john.BMI);
} else if (john.BMI === mark.BMI){
    console.log(john.fullName + ' and ' + mark.fullName + 'has same BMI and their BMI is: ' + mark.BMI);
} else {
    console.log(mark.fullName + " has more BMI than John's and his BMI is " + mark.BMI);
}