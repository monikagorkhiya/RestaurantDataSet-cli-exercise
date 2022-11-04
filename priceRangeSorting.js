const fileTasks = require("./modules/readCSV.js")
const filePriceSorting = require("./modules/priceSorting.js")


let arr = process.argv[2].split("-");
const lowerLimit = parseFloat(arr[0]);
const upperLimit = parseFloat(arr[1]);

const sortingOrder = process.argv[3];

fileTasks.read_csv("assets/restaurant.csv")
.then(dataSet=>{
    return priceRangeFilter(dataSet, lowerLimit, upperLimit);
})
.then(filteredData=>{
    return filteredData.sort(filePriceSorting.sortByPriceRange);
    // Can also write like this her in the next line--> return filteredData
})
.then(filteredData=>{
    printByOrder(filteredData, sortingOrder);
})

//filtering retaurants based on the given price range
function priceRangeFilter(dataSet, lowerLimit, upperLimit){
    let filteredData=[];
    dataSet.forEach(restro => {
        let avgCostRestro = parseFloat(restro['Average Cost for two'])
        if (avgCostRestro>=lowerLimit && avgCostRestro<upperLimit){
            filteredData.push(restro);
        }
    });
    return filteredData
}

//function to print restaurants low to high OR high to low as per their pricing
function printByOrder(filteredData, sortingOrder){
    if (sortingOrder==='low-high'){
        for(i=filteredData.length-1; i>=0; i--){
            console.log(filteredData[i]['Restaurant Name'])
        }
    }else if(sortingOrder==='high-low'){
        for(i=0; i<filteredData.length; i++){
            console.log(filteredData[i]['Restaurant Name'])
        }
    }
}
