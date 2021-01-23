

// function kilometerToMeter(kilometer) {
//     var meter = kilometer * 1000;
//     return meter;
// }
// var result = kilometerToMeter(5);
// console.log(result);

// end kilometerToMeter

function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 && phone > 0 && laptop > 0) {
        var budge = watch * 50;
        var budge2 = phone * 100;
        var budge3 = laptop * 500;
        var totalBudget = budge + budge2 + budge3;
    }
    else{
        console.log("don't push negetive input");
    }
    return totalBudget;
}
var output = budgetCalculator(1, 2, 3);
console.log(output);

// end budgetCalculator


// function hotelCost(howManyNight) {
//     var oneToTenNight = 10;
//     var elevenToTweentyNight = 20;

//     if (howManyNight > 1) {

//         if (howManyNight <= oneToTenNight) {
//             var cost1 = howManyNight * 100;
//             return cost1;
//         }
//         if ((howManyNight <= elevenToTweentyNight) && (howManyNight > oneToTenNight)) {
//             var cost2 = ((howManyNight - oneToTenNight) * 80);
//             var cost3 = (oneToTenNight * 100);
//             var cost4 = cost2 + cost3;
//             return cost4;
//         }
//         else {
//             if (howManyNight > elevenToTweentyNight) {
//                 var cost6 = ((howManyNight - elevenToTweentyNight) * 50);
//                 var cost8 = ((elevenToTweentyNight - oneToTenNight) * 80);
//                 var cost3 = (oneToTenNight * 100);
//                 var cost9 = cost3 + cost6 + cost8;
//                 return cost9;

//             }
//         }

//     }
//     else {
//         console.log("don't push negetive input")
//     }
// }
// var result = hotelCost(20);
// console.log(result);                             


// end hotelCost

// var nameArr = [atiq, chandni, labiba, juwel, atqurRahman]
// function megaFriend(){

// }