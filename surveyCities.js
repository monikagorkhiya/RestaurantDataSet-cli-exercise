const fileTasks = require("./modules/readCSV.js");
const filePrintData = require("./modules/printData.js");

fileTasks.read_csv("assets/restaurant.csv")
.then((data)=>{
    return getRestroArr(data)
})
.then((restroArr)=>{
    return removeDuplicates(restroArr);
})
.then(uniQ=>filePrintData.printData(uniQ))

function getRestroArr(data){
    promise = new Promise(function(resolve, reject){
    let restroArr=[];
    data.forEach(restro => {
        restroArr.push(restro.City);
    });
    resolve(restroArr);
})
    return promise
}

function removeDuplicates(data) {
    let uniQ = data.filter((item,
        index) => data.indexOf(item) === index);
    return uniQ
}
