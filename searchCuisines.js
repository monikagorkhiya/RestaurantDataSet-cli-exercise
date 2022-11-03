const fileReadCSV = require("./modules/readCSV.js")

const cuisine = process.argv[2]

fileReadCSV.read_csv("assets/restaurant.csv")
.then(dataSet=>{
    cuisineFilter(dataSet, cuisine)
})

function cuisineFilter(dataSet, cuisine){
    dataSet.forEach(row => {
        if (row.Cuisines.includes(cuisine)){
            console.log(row['Restaurant Name']);
        }
    });
}
