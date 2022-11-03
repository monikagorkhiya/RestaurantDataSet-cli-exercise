function sortByRating(a, b) {

    const rating1 = a['Aggregate rating'];
    const rating2 = b['Aggregate rating'];

    let comparison = 0;

    if (rating1 < rating2) {
        comparison = 1;
    } else if (rating1 > rating2) {
        comparison = -1;
    }
    return comparison;
}

module.exports = {sortByRating};
