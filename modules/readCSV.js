const fs = require("fs");
const {parse} = require("csv-parse");

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
        resolve(data)
    });
  })
  return promise
}

module.exports = {read_csv};