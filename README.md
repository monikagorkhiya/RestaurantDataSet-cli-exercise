# Restaurant DataSet CLI Exercise

We have a restaurant dataset for this exercise, and you have to do some tasks on it.
 
Dataset we are using is from from this below CSV


## SETUP

- Git Clone
```
$ git clone  https://github.com/monikagorkhiya/RestaurantDataSet-cli-exercise.git
```

- Install npm
```
$ npm install
```

## TASK

### Question - 1) Display list of restaurants based on given cuisines - argument is Cuisine (like Japanes) based on Cuisines Column
#### Answer:

- Run
```
$ node searchCuisines.js {cuisines}
```

### Question - 2) Display List of Restaurants based on given Location - argument is Cuisines (like Santa Rosa,Makati City) based on Locality Column
#### Answer:

- Run
```
$ node searchLocation.js {locality}
```

### Question - 3) Restaurants listed by Top 10 Highest Rating - passing argument of top numbers
#### Answer:

- Run
```
$ node highestRatings.js {10}
```

### Question - 4) List of countries the survey is spread across

#### Answer:

- Run
```
$ node surveyCountires.js
```

- Output Example
```
List of countries the survey is spread across -
Philippines
Brazil
United States
Australia
Canada
Singapore
UAE
etc...
```
Total number to country 15

### Question - 5) What kind of cuisine do these highly-rated restaurants offer?

#### Answer:

- Run
```
$ node topRatedCuisine.js
```

- Output Example
```
Top-rated restaurants seem to be doing well in the following cuisine -
North Indian
Chinese
Italian
American
```
### Question - 6) Display list of restaurant based on given Price Range with Sorting - passing range as argument like 100-500 and sorting with argument like low-high


#### Answer:

- Run
```
$ node PriceRangeSorting.js {100-500} {low-high}
```
### Question - 7) Which Restaurants are more expensive?


#### Answer:

- Run
```
$ node expensiveRestaurants.js
```

### Question - 8) Display the highest rated restaurants in given city name.

#### Answer:

- Run
```
$ node highRatedRestaurants.js {New Delhi}
```

Output example :
```
Average      2495
Not rated    1425
Good         1128
Very Good     300
Poor           97
Excellent      28
```

### Question - 9) Shows number of restaurant Rating wise list

#### Answer:

- Run
```
$ node ratingWiseRestaurants.js
```

Output example :
```
Rating 0 | White | Not rated | 100 restaurant
Rating 1.8 to 2.4 | Red | Poor | 50 restaurant
Rating 2.5 to 3.4 | Orange |Average | 30 restaurant
Rating 3.5 to 3.9 | Yellow | Good | 20 restaurant
Rating 4.0 to 4.4 | Green | Very Good | 10 restaurant
Rating 4.5 to 4.9 | Dark Green | Excellent | 6 restaurant
```

### Question - 10) Show numbers of these restaurants belong to some specific country.

#### Answer:

- Run
```
$ node ratingWiseRestaurants.js
```

Output example :

```
Country | Rating Count
----------------------------------
Brazil  | 5
India   | 2139
```

### Question - 11)  How many of such restaurants accept online delivery country wise?


#### Answer:

- Run
```
$ node OnlineDeliveryRestaturants.js
```
Output example :

```
Country | count of online delivery
----------------------------------
Brazil  | 5
India   | 2139
```