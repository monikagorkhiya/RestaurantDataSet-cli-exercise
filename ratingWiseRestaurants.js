const fileReadCSV = require('./modules/readCSV.js');
const fileSegregateRatings = require('./modules/segregateRatings.js');
const util = require('util')

fileReadCSV.read_csv("assets/restaurant.csv")
.then(data=>{
    return fileSegregateRatings.segregateRatings(data)
})
.then((segregateObject)=>{
    printByFashion(segregateObject)
})

function printByFashion(segregateObject){
    let var0 = util.format("Rating 0 | White | Not Rated | %s restaurant", segregateObject.notRated);
    let var1 = util.format("Rating 1.8 to 2.4 | Red | Poor | %s restaurant", segregateObject.poor);
    let var2 = util.format("Rating 2.5 to 3.4 | Orange | Average | %s restaurant", segregateObject.average);
    let var3 = util.format("Rating 3.5 to 3.9 | Yellow | Good | %s restaurant", segregateObject.good);
    let var4 = util.format("Rating 4.0 to 4.4 | Green | Very Good | %s restaurant", segregateObject.veryGood);
    let var5 = util.format("Rating 4.5 to 4.9 | Dark Green | Excellent | %s restaurant", segregateObject.excellent);

    console.log(var0)
    console.log(var1)
    console.log(var2)
    console.log(var3)
    console.log(var4)
    console.log(var5)
}
