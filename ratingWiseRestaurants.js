const fileReadCSV = require('./modules/readCSV.js');
const fileSegregateRatings = require('./modules/segregateRatings.js');
const util = require('util');

fileReadCSV.read_csv("assets/restaurant.csv")
.then(data=>{
    return fileSegregateRatings.segregateRatings(data);
})
.then((segregateObject)=>{
    printByFashion(segregateObject);
})

function printByFashion(segregateObject){
    let stringNotRated = util.format("Rating 0 | White | Not Rated | %s restaurant", segregateObject.notRated);
    let stringPoor = util.format("Rating 1.8 to 2.4 | Red | Poor | %s restaurant", segregateObject.poor);
    let stringAverage = util.format("Rating 2.5 to 3.4 | Orange | Average | %s restaurant", segregateObject.average);
    let stringGood = util.format("Rating 3.5 to 3.9 | Yellow | Good | %s restaurant", segregateObject.good);
    let stringVeryGood = util.format("Rating 4.0 to 4.4 | Green | Very Good | %s restaurant", segregateObject.veryGood);
    let stringExcellent = util.format("Rating 4.5 to 4.9 | Dark Green | Excellent | %s restaurant", segregateObject.excellent);

    console.log(stringNotRated);
    console.log(stringPoor);
    console.log(stringAverage);
    console.log(stringGood);
    console.log(stringVeryGood);
    console.log(stringExcellent);
}
