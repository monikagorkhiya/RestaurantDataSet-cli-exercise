const fileTasks = require("./modules/readCSV.js")
const filePriceSorting = require("./modules/priceSorting.js")
const filePrintN = require("./modules/printN.js")

const numberOfRestros = 50; //Number of top most restaurants you want to see

fileTasks.read_csv("assets/restaurant.csv")

.then(dataSet=>{//sorting restaurants based on their Price
    dataSet.sort(filePriceSorting.sortByPriceRange)
    return dataSet
})
.then(filteredData=>{
    //printing n data from modules/printN.js file
    filePrintN.printN(filteredData, numberOfRestros)//printing first n restaurants
 
})
