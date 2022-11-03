const fileTasks = require("./modules/readCSV.js")
const fileRateSorting = require("./modules/ratingSort.js")
const filePrintN = require("./modules/printN.js")
const N = process.argv[2]

fileTasks.read_csv("assets/restaurant.csv")
.then((data)=>{
    data.sort(fileRateSorting.sortByRating);//sorting restaurants based on rating
    return data
})
.then(data=>filePrintN.printN(data, N))//printing first N restaurants
