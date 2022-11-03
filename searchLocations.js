const tasksFile = require("./modules/readCSV.js")
const filePrintData = require("./modules/printData.js")
const fileLocationFilter = require('./modules/locationFilter.js')
const city = process.argv[2]

tasksFile.read_csv("assets/restaurant.csv")
.then((data)=>{
    return fileLocationFilter.locationFilter(data, city);
})//displaying data using function from ./modules/prinData.js
.then(filteredData=>filePrintData.printData(filteredData));
