
const fileReadCSV = require("./modules/readCSV.js");
const fileSegregateRatings = require('./modules/segregateRatings.js')

const city = process.argv[2];

fileReadCSV.read_csv("assets/restaurant.csv")
.then((data)=>{//finding restaurants in a particular city
    return locationFilter(data, city);
})
.then(filteredData=>{
    return fileSegregateRatings.segregateRatings(filteredData);
})
.then(segregateObject=>{
    printSegregateObject(segregateObject);
})
function printSegregateObject(segregateObject){//printing number of restaurants rating wise
    console.log("Average    ", segregateObject.average);
    console.log("Not rated    ", segregateObject.notRated);
    console.log("Good    ", segregateObject.good);
    console.log("Very Good    ", segregateObject.veryGood);
    console.log("Poor    ", segregateObject.poor);
    console.log("Excellent    ", segregateObject.excellent);
}

function locationFilter(dataSet, city){
    let filteredData=[];
    dataSet.forEach(row => {
        if (row.City.includes(city)){
            filteredData.push(row)
        }
    });
    return filteredData
}
