// import { readCSV } from "./tasks.js";

const fileTasks = require("./tasks.js")
const city = process.argv[2]

fileTasks.read_csv("assets/restaurant.csv")
.then((data)=>{
    locationFilter(data, city);
})

function locationFilter(dataSet, city){
    dataSet.forEach(row => {
        if (row.City.includes(city)){
            console.log(row);
        }
    });
}