const tasksFile = require("./modules/readCSV.js")
const fileRateSorting = require("./modules/ratingSort.js")

const n=10;

tasksFile.read_csv("assets/restaurant.csv")
.then((data)=>{//Sorting restaurants based on their ratings
    data.sort(fileRateSorting.sortByRating);
    return data
})
.then(data=>{
    console.log("Top-rated restaurants seem to be doing well in the following cuisine -");
    printN(data, n)})


function printN(data, n){
    for (i=0; i<n; i++){
        console.log(data[i].Cuisines)
    }
}
