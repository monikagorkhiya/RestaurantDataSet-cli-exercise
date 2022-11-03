function locationFilter(dataSet, city){
    let filteredData=[];
    dataSet.forEach(row => {
        if (row.City.includes(city)){
            filteredData.push(row['Restaurant Name'])
        }
    });
    return filteredData
}
module.exports={locationFilter};
