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

enum MENU{
    roll = "roll",
    burger = "burger",
    pizza = "pizza"
}

enum REVIEW{
    bad = 0,
    good = 1,
    delicious = 2
}

type ORDER = {
    Order: MENU,
    Payment: number,
    review: REVIEW
}

let AhmedOrder : ORDER = {
    Order: MENU.pizza,
    Payment: 350,
    review: REVIEW.delicious
}

console.log(AhmedOrder)