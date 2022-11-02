const fs = require("fs");
const {parse} = require("csv-parse");

// var dataSet=[];
const read_csv = function(csvPath){
  let promise = new Promise(function(resolve, reject){
    let data=[];
  fs.createReadStream(csvPath)
    .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
    )
    .on("data", function (row) {
        data.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
      reject(error)
    })
    .on("end", function () {
        console.log("parsed csv data:");
        dataSet=data;
        resolve(data)
    });
  })
  return promise
}

// read_csv("assets/restaurant.csv")
// .then((data)=>console.log(data))
module.exports = {read_csv};