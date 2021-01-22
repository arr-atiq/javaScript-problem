

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result);


// end kilometerToMeter

function budgetCalculator(watch, phone, laptop){
    var budge = watch*50;
    var budge2 = phone*100;
    var budge3 = laptop*500;
    var totalBudget= budge+budge2+budge3;

    return totalBudget;
}

var output = budgetCalculator(3,3,3);
console.log(output);