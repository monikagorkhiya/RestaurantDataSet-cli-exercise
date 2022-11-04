function segregateRatings(filteredData){//function to count segregate ratings
    let segregateObject = {
        average:0,
        notRated:0,
        good:0,
        veryGood:0,
        poor:0,
        excellent:0
    }
    filteredData.forEach(restro => {
        let rating = parseFloat(restro['Aggregate rating']);
        if(rating===0){
            segregateObject.notRated++;
        }else if(rating>=1.8 && rating<=2.4){
            segregateObject.poor++;
        }else if (rating>=2.5 && rating<=3.4){
            segregateObject.average++;
        }else if(rating>=3.5 && rating<=3.9){
            segregateObject.good++;
        }else if(rating>=4.0 && rating<=4.4){
            segregateObject.veryGood++;
        }else if(rating>=4.5 && rating<=4.9){
            segregateObject.excellent++;
        }
    });
    return segregateObject
}

module.exports = {segregateRatings};
