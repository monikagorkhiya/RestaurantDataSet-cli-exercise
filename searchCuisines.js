// import { readCSV } from "./tasks.js";
const fileTasks = require("./tasks.js")

const cuisine = process.argv[2]

fileTasks.read_csv("assets/restaurant.csv")
.then(dataSet=>{
    cuisineFilter(dataSet, cuisine)
})

function cuisineFilter(dataSet, cuisine){
    dataSet.forEach(row => {
        if (row.Cuisines.includes(cuisine)){
            console.log(row);
        }
    });
}