function sortByPriceRange(a, b) {

    const avgCost1 = parseFloat(a['Average Cost for two']);
    const avgCost2 = parseFloat(b['Average Cost for two']);

    let comparison = 0;

    if (avgCost1 < avgCost2) {
        comparison = 1;
    } else if (avgCost1 > avgCost2) {
        comparison = -1;
    }
    return comparison;
}

module.exports={sortByPriceRange};
