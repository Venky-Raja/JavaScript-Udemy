var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

function tipCalculator( bill ){
    if( bill <= 50 ){
        return bill * (20/100);
    } else if (bill > 50 && bill <= 200){
        return bill * (15/100);
    } else {
        return bill * (10/100);
    }
}

/*
var tip1 = tipCalculator(bill1);
var tip2 = tipCalculator(bill2);
var tip3 = tipCalculator(bill3);

var tipArray = [tip1, tip2, tip3];
console.log(tipArray);

var billAmt1 = tip1 + bill1;
var billAmt2 = tip2 + bill2;
var billAmt3 = tip3 + bill3;

var billArray = [billAmt1, billAmt2, billAmt3];
console.log(billArray);
*/


console.log( tipArray1 = [tipCalculator(bill1), tipCalculator(bill2), tipCalculator(bill3)]);

console.log ( billArray1 = [(tipCalculator(bill1) + bill1), (tipCalculator(bill2) + bill2), (tipCalculator(bill3) + bill3)]);