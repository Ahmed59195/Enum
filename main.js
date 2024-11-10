"use strict";
// enum color{
//     red = "red",
//     blue = "blue",
//     green = "green"
// }
// console.log(color.blue)
// enum MENU{
//     ROLL = "ROLL",
//     BURGER = "BURGER",
//     PIZZA = "PIZZA",
//     FRIES = "FRIES"
// }
// enum REVIEW{
//     BAD = "0",
//     GOOD = "1",
//     DELICIOUS = "2"
// }
// type  order = {
//     Order : MENU,
//     Payment : number,
//     review : REVIEW
// }
// let AhmedOrder : order = {
//     Order : MENU.BURGER,
//     Payment : 350,
//     review: REVIEW.DELICIOUS
// }
// console.log(AhmedOrder)
// enum weekdays{
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// console.log(weekdays.Friday
// )
// enum Order{
//     Frenchfries =1,
//     Roll = 2,
//     Burger = 3
// }
// console.log(Order.Burger)
var MENU;
(function (MENU) {
    MENU["roll"] = "roll";
    MENU["burger"] = "burger";
    MENU["pizza"] = "pizza";
})(MENU || (MENU = {}));
var REVIEW;
(function (REVIEW) {
    REVIEW[REVIEW["bad"] = 0] = "bad";
    REVIEW[REVIEW["good"] = 1] = "good";
    REVIEW[REVIEW["delicious"] = 2] = "delicious";
})(REVIEW || (REVIEW = {}));
let AhmedOrder = {
    Order: MENU.pizza,
    Payment: 350,
    review: REVIEW.delicious
};
console.log(AhmedOrder);
